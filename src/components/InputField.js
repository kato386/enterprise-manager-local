import AsyncSelect from "react-select/async";
import { useEffect, useState, useRef } from "react";
import RadioButton from "./RadioButton";
const USER_REGEX = /^[0-9]{14,15}$/;
const DAYS_REGEX = /^[1-9][0-9]?$|^[1-2][0-9]{2}$/;
const InputField = ({
  filterInfo,
  setFilterInfo,
  names,
  setFilter,
  setSuccess,
  dummyFilter,
  setDummyFilter,
  setRealFormId,
  setEnterpriseNames,
  setDays,
}) => {
  //enterprise name input field

  var options = names.map((name) => ({
    value: name.company,
    label: name.company,
  }));
  options.push({ value: "ywca", label: "ywca" });
  options.push({ value: "whiterockcity", label: "whiterockcity" });
  options.push({ value: "evergreentlc", label: "evergreentlc" });
  options.push({ value: "firstdata", label: "firstdata" });
  options.push({ value: "stuyversbread", label: "stuyversbread" });
  options.push({ value: "ssfinc", label: "ssfinc" });

  const [selectedElements, setSelectedElements] = useState("");

  const loadNames = (searchValue, callback) => {
    //search islemiyle enterprise secme
    const filteredNames = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    callback(filteredNames);
  };

  const handleInput = (selectedItem) => {
    setSelectedElements(selectedItem);
    console.log(selectedElements);
  };

  ////// formid focus ,input ,hide show
  const [showHide, setShowHide] = useState("no");
  const [validInput, setvalidInput] = useState(true);

  const userRef = useRef();

  //checkboxla multi select durumda isimleri biriktirmek için gerekli method.
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const filters = filterInfo;

    if (checked) {
      setFilterInfo([...filters, value]);
    } else {
      setFilterInfo(filters.filter((e) => e !== value));
    }
  };
  const [formId, setFormId] = useState("");
  useEffect(() => {
    if (showHide === "yes") {
      userRef.current.focus();
    }
  }, [showHide]);

  useEffect(() => {
    if (showHide === "yes") {
      const result = USER_REGEX.test(formId);
      setvalidInput(result);
    }
  }, [formId]);

  const handleshow = (e) => {
    if (dummyFilter !== "paymentFormNumber") {
      const getshow = e.target.value;
      if (getshow === "no") {
        setFormId("");
        userRef.current.value = "";
      }
      setShowHide(getshow);
    }
  };

  ////////////////////////////////////////

  const handleChangeForRadioBox = (e) => {
    const checkedTarget = e.target.value;

    setDummyFilter(checkedTarget);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEnterpriseNames(selectedElements);
    setRealFormId(formId);

    setFilter(dummyFilter);
    setDays(inputDays);
  };

  /////////////////////////////////show hide days input field.
  const [showHideDays, setShowHideDays] = useState(false);
  const [inputDays, setInputDays] = useState("");
  const [validDays, setValidDays] = useState(true);
  useEffect(() => {
    if (dummyFilter === "soldProduct") {
      setShowHideDays(true);
    } else {
      setShowHideDays(false);
      setInputDays("");
    }
  }, [dummyFilter]);

  useEffect(() => {
    if (dummyFilter === "paymentFormNumber") {
      setShowHide("no");
      setFormId("");
      userRef.current.value = "";
    }
  }, [dummyFilter]);
  useEffect(() => {
    if (showHideDays === true) {
      const resultDays = DAYS_REGEX.test(inputDays);

      setValidDays(resultDays);
    }
  }, [inputDays]);

  return (
    <div className="w-[400px] min-w-[400px] bg-gray-50 rounded-lg p-6">
      <h4 className="text-center p-2 text-lg text-gray-500">
        Enter Search Parameters.
      </h4>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 grid-rows-2 gap-1 ">
          <div className="">
            <label
              htmlFor="names"
              className="text-gray-500 font-bold  whitespace-nowrap mr-2 text-center"
            >
              Enterprise Name:
            </label>
          </div>
          <div className="col-span-1 row-span-1">
            <AsyncSelect
              id="names"
              className="text-sm text-gray-500 border-1 "
              loadOptions={loadNames}
              onChange={handleInput}
            ></AsyncSelect>
          </div>
        </div>

        <div className="container flex justify-between w-full h-[150px] mt-[20px]  ">
          <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-1 ">
            <label class="cursor-pointer col-span-1 row-span-1 ">
              <input
                type="radio"
                class="peer sr-only"
                value="gatewayName"
                checked={dummyFilter === "gatewayName"}
                onChange={handleChangeForRadioBox}
              />
              <div class=" rounded-md bg-purple-300 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-800 peer-checked:ring-blue-600 ">
                <p class="text-sm font-bold">Gateway names of enterprise. </p>
              </div>
            </label>
            <label class="cursor-pointer col-span-1 row-span-1">
              <input
                type="radio"
                class="peer sr-only"
                value="paymentFormNumber"
                checked={dummyFilter === "paymentFormNumber"}
                onChange={handleChangeForRadioBox}
              />
              <div class=" rounded-md bg-purple-300 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-800 peer-checked:ring-blue-600 ">
                <p class="text-sm font-bold">Number of payment forms.</p>
              </div>
            </label>
            <label class="cursor-pointer col-span-1 row-span-1">
              <input
                type="radio"
                class="peer sr-only"
                value="soldProduct"
                checked={dummyFilter === "soldProduct"}
                onChange={handleChangeForRadioBox}
              />
              <div class=" rounded-md bg-purple-300 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-800 peer-checked:ring-blue-600 ">
                <p class="text-sm font-bold">Number of products sold.</p>
              </div>
            </label>
            <label class="cursor-pointer col-span-1 row-span-1">
              <input
                type="radio"
                class="peer sr-only"
                value="findProductType"
                checked={dummyFilter === "findProductType"}
                onChange={handleChangeForRadioBox}
              />
              <div class=" rounded-md bg-purple-300 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-800 peer-checked:ring-blue-600 ">
                <p class="text-sm font-bold">Product types of enterprise.</p>
              </div>
            </label>
          </div>
        </div>

        <div
          className={
            dummyFilter === "paymentFormNumber"
              ? "hidden"
              : "grid grid-rows-1 grid-cols-3 text-gray-600  mr-2 mt-[25px] col-span-1"
          }
        >
          <label htmlFor="idQuestion" className="col-span-2 font-bold">
            Do you want to enter FormId.
          </label>
          <div id="idQuestion" className="flex justify-around">
            <div className="">
              <input
                className="sr-only peer"
                type="radio"
                value="yes"
                checked={showHide === "yes"}
                onClick={handleshow}
                onChange={() => {}}
                id="yesInput"
              />
              <label
                className="m-1 peer-checked:text-blue-800 ring-2 ring-transparent font-bold text-sm text-gray-600 bg-purple-200 rounded px-4 p-1 peer-checked:ring-blue-600"
                htmlFor="yesInput"
              >
                Yes
              </label>
            </div>
            <div className=" ">
              <input
                className="sr-only peer"
                type="radio"
                value="no"
                checked={showHide === "no"}
                onChange={() => {}}
                id="noInput"
                onClick={handleshow}
              />
              <label
                className="m-1 peer-checked:text-blue-800 ring-2 ring-transparent  font-bold text-sm text-gray-600 bg-purple-200 rounded px-4 p-1 peer-checked:ring-blue-600"
                htmlFor="noInput"
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className={showHideDays === true ? "" : "hidden"}>
          <div className="grid grid-rows-2 gap-1">
            <label className="text-gray-500 font-bold " htmlFor="days">
              Number of days.(last x days):
            </label>
            <input
              className="row-span-1 h-10 border-2 border-gray-200 rounded p-3 w-full"
              type="text"
              id="days"
              value={inputDays}
              autoComplete="off"
              onChange={(e) => setInputDays(e.target.value)}
              required={showHideDays === true}
            />
          </div>

          <p
            className={
              validDays ? "hidden" : "bg-black text-white p-3 mt-3 rounded"
            }
          >
            1-299
            <br />
            Only numbers allowed.
          </p>
        </div>

        <div className={showHide === "yes" ? "" : "hidden"}>
          <div className="grid grid-cols-1 grid-rows-2 gap-1">
            <div className="flex items-center">
              <label className="text-gray-500 font-bold " htmlFor="username">
                FormID:
              </label>
            </div>
            <div className="flex items-center col-span-1 row-span-1">
              <input
                className="h-10 border-2 border-gray-200 rounded w-full p-3"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFormId(e.target.value)}
                required={showHide === "yes"}
              />
            </div>
          </div>

          <p
            className={
              !validInput ? "bg-black text-white p-3 mt-3 rounded" : "hidden"
            }
          >
            14-15 characters.
            <br />
            Only numbers allowed.
          </p>
        </div>
        <button
          className="bg-orange-400  w-full h-12 transition-colors hover:bg-purple-700 hover:text-orange-400 mt-[20px] flex items-center justify-center rounded-lg  text-lg"
          disabled={
            dummyFilter === "" ||
            selectedElements.length === 0 ||
            (showHide === "yes") & !validInput ||
            (showHideDays === true) & !validDays
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputField;
