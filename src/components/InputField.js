import AsyncSelect from "react-select/async";
import { useEffect, useState, useRef } from "react";
import RadioButton from "./RadioButton";
const USER_REGEX = /^[0-9]{15}$/;
const DAYS_REGEX = /^[1-9][0-9]$/;
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
  var options = names.map((name) => ({ value: name.name, label: name.name }));

  const [selectedElements, setSelectedElements] = useState([]);

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
  const [validName, setValidName] = useState(true);

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
      setValidName(result);
    }
  }, [formId]);

  const handleshow = (e) => {
    const getshow = e.target.value;
    if (getshow === "no") {
      setFormId("");
      userRef.current.value = "";
    }
    setShowHide(getshow);
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
  const [inputDays, setInputDays] = useState();
  useEffect(() => {
    if (dummyFilter === "soldProduct") {
      setShowHideDays(true);
    } else {
      setShowHideDays(false);
    }
  }, [dummyFilter]);

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
              isMulti
              loadOptions={loadNames}
              onChange={handleInput}
            ></AsyncSelect>
          </div>
        </div>

        <div className="container flex justify-between w-full h-[150px] bg-purple-300 p-2 mt-2">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="col-span-1 row-span-1 bg-purple-400 border-2 rounded-xl ">
              <div className="grid grid-rows-1 grid-cols-3">
                <input
                  className="w-5 h-7 text-blue-600 bg-gray-100 border-gray-300 m-2 rounded col-span-1"
                  type="radio"
                  value="gatewayName"
                  checked={dummyFilter === "gatewayName"}
                  onChange={handleChangeForRadioBox}
                  id="gatewayName"
                />

                <label
                  htmlFor="gatewayName"
                  className=" text-sm font-medium text-gray-900 col-span-2 items-center mt-3"
                >
                  Gateway name.
                </label>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-purple-400 border-2 rounded-xl ">
              <div className="grid grid-rows-1 grid-cols-3">
                <input
                  className="w-5 h-7 text-blue-600 bg-gray-100 border-gray-300 m-2 rounded col-span-1"
                  type="radio"
                  value="paymentFormNumber"
                  checked={dummyFilter === "paymentFormNumber"}
                  onChange={handleChangeForRadioBox}
                  id="paymentFormNumber"
                />

                <label
                  htmlFor="paymentFormNumber"
                  className=" text-sm font-medium text-gray-900 col-span-2 items-center mt-3"
                >
                  Number of payment forms.
                </label>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-purple-400 border-2 rounded-xl ">
              <div className="grid grid-rows-1 grid-cols-3">
                <input
                  className="w-5 h-7 text-blue-600 bg-gray-100 border-gray-300 m-2 rounded col-span-1"
                  type="radio"
                  value="soldProduct"
                  checked={dummyFilter === "soldProduct"}
                  onChange={handleChangeForRadioBox}
                  id="soldProduct"
                />

                <label
                  htmlFor="soldProduct"
                  className=" text-sm font-medium text-gray-900 col-span-2 items-center mt-3"
                >
                  Number of products sold.
                </label>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-purple-400 border-2 rounded-xl ">
              <div className="grid grid-rows-1 grid-cols-3">
                <input
                  className="w-5 h-7 text-blue-600 bg-gray-100 border-gray-300 m-2 rounded col-span-1"
                  type="radio"
                  value="findProductType"
                  checked={dummyFilter === "findProductType"}
                  onChange={handleChangeForRadioBox}
                  id="findProductType"
                />

                <label
                  htmlFor="findProductType"
                  className=" text-sm font-medium text-gray-900 col-span-2 items-center mt-3"
                >
                  Product types.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 grid-cols-3 text-gray-500 font-bold  whitespace-nowrap mr-2 col-span-1">
          <label htmlFor="idQuestion" className="col-span-2">
            Do you want to enter FormId.
          </label>
          <div id="idQuestion" className="text-xl">
            <label htmlFor="yesInput">Yes</label>
            <input
              type="radio"
              value="yes"
              checked={showHide === "yes"}
              onClick={handleshow}
              onChange={() => {}}
              id="yesInput"
            />
            <label htmlFor="noInput">No</label>
            <input
              type="radio"
              value="no"
              checked={showHide === "no"}
              onChange={() => {}}
              id="noInput"
              onClick={handleshow}
            />
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
              autoComplete="off"
              onChange={(e) => setInputDays(e.target.value)}
              required={showHideDays === true}
            />
          </div>
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
              !validName ? "bg-black text-white p-3 mt-3 rounded" : "hidden"
            }
          >
            12 characters.
            <br />
            Only numbers allowed.
          </p>
        </div>
        <button
          className="bg-orange-400 w-full h-12 transition-colors hover:bg-purple-700 hover:text-orange-400 mt-3 flex items-center justify-center rounded-lg text-purple-700"
          disabled={
            dummyFilter === "" ||
            selectedElements.length === 0 ||
            !(showHide === "no") & !validName
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
