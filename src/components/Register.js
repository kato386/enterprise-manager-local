import { useRef, useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { Link } from "react-router-dom";
import Result from "./Result";
import CheckBox from "./CheckBox";

const USER_REGEX = /^[0-9]{12}$/;

const Register = ({ names }) => {
  //select element methods
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

  //form-id focus and input
  const userRef = useRef();

  const [formId, setUser] = useState("");
  const [validName, setValidName] = useState(true);
  const [userFocus, setUserFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  const [filterInfo, setFilterInfo] = useState([]);
  const [showHide, setShowHide] = useState("no");

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
    console.log(validName + "  valid name değişti." + showHide);
  }, [formId]);

  // filter components

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const filters = filterInfo;

    if (checked) {
      setFilterInfo([...filters, value]);
    } else {
      setFilterInfo(filters.filter((e) => e !== value));
    }
  };

  const [gatewayClicked, setgatewayClicked] = useState(false);
  const [productNumClicked, setProductNumClicked] = useState(false);
  const [paymentFormNumberClicked, setpaymentFormNumberClicked] =
    useState(false);
  const [productTypesClicked, setProductTypesClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log(formId);
    console.log(filterInfo);
    setgatewayClicked(filterInfo.includes("GatewayName"));
    setProductNumClicked(filterInfo.includes("NumOfProducts"));
    setpaymentFormNumberClicked(filterInfo.includes("NumOfPForms"));
    setProductTypesClicked(filterInfo.includes("types"));
  };

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowHide(getshow);
  };

  return (
    <>
      {success ? (
        <div>
          <Result
            gatewayClicked={gatewayClicked}
            productNumClicked={productNumClicked}
            paymentFormNumberClicked={paymentFormNumberClicked}
            productTypesClicked={productTypesClicked}
            formId={formId}
          />
        </div>
      ) : (
        <div className="relative h-[650px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <div className="container flex justify-around absolute top-0 z-20 items-center left-1/2 -translate-x-1/2 h-full">
            <div className="min-w-[450px] ">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/Jotform_logo.png"
              />
              <div className="flex items-center">
                <h3 className="text-white  text-4xl ">
                  Jotform enterprise search app
                </h3>
              </div>
            </div>
            <div className="w-[400px] min-w-[400px] bg-gray-50 rounded-lg h-auto p-6">
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
                    <CheckBox
                      value="GatewayName"
                      name={"Gateway name."}
                      handleChange={handleChange}
                    />
                    <CheckBox
                      value="NumOfPForms"
                      name={"Number of payment forms."}
                      handleChange={handleChange}
                    />
                    <CheckBox
                      value="NumOfProducts"
                      name={"Number of products sold."}
                      handleChange={handleChange}
                    />
                    <CheckBox
                      value="types"
                      name={"Product types."}
                      handleChange={handleChange}
                    />
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
                <div className={showHide === "yes" ? "" : "hidden"}>
                  <div className="grid grid-cols-1 grid-rows-2 gap-1">
                    <div className="flex items-center">
                      <label
                        className="text-gray-500 font-bold whitespace-nowrap"
                        htmlFor="username"
                      >
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
                        onChange={(e) => setUser(e.target.value)}
                        required={showHide === "yes"}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </div>
                  </div>

                  <p
                    className={
                      userFocus && formId && !validName
                        ? "bg-black text-white p-3 mt-3 relative rounded"
                        : "hidden"
                    }
                  >
                    12 characters.
                    <br />
                    Only numbers allowed.
                  </p>
                </div>
                <button
                  className="bg-orange-400 w-full h-12 transition-colors hover:bg-purple-700 hover:text-orange-400 mt-3 flex items-center justify-center rounded-lg text-purple-700"
                  disabled={!(showHide === "no") & !validName ? true : false}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
