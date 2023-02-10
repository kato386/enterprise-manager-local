import { useRef, useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { Link } from "react-router-dom";
import Result from "./Result";
import CheckBox from "./CheckBox";
import InputField from "./InputField";

const Context = ({ names }) => {
  //select element methods

  //form-id focus and input

  const [formId, setFormId] = useState("");
  const [success, setSuccess] = useState(false);

  const [filterInfo, setFilterInfo] = useState([]);
  const [filter, setFilter] = useState("");
  // filter components

  const [gatewayClicked, setgatewayClicked] = useState(false);
  const [productNumClicked, setProductNumClicked] = useState(false);
  const [paymentFormNumberClicked, setpaymentFormNumberClicked] =
    useState(false);
  const [productTypesClicked, setProductTypesClicked] = useState(false);

  return (
    <div className="relative h-[650px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <div className="container flex justify-between absolute top-0 z-20 items-center left-1/2 -translate-x-1/2 h-full">
        <div>
          <InputField
            setFormId={setFormId}
            formId={formId}
            names={names}
            filterInfo={filterInfo}
            setFilterInfo={setFilterInfo}
            filter={filter}
            setFilter={setFilter}
            setgatewayClicked={setgatewayClicked}
            setProductNumClicked={setProductNumClicked}
            setpaymentFormNumberClicked={setpaymentFormNumberClicked}
            setProductTypesClicked={setProductTypesClicked}
            setSuccess={setSuccess}
          />
        </div>
        <div className="w-[700px] min-w-[400px]">
          {success ? (
            <div>
              <Result
                gatewayClicked={gatewayClicked}
                productNumClicked={productNumClicked}
                paymentFormNumberClicked={paymentFormNumberClicked}
                productTypesClicked={productTypesClicked}
                formId={formId}
                filterInfo={filterInfo}
                filter={filter}
              />
            </div>
          ) : (
            <div className="min-w-[450px] m-[50px]">
              <img
                className="m-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/Jotform_logo.png"
              />
              <div className="flex items-center">
                <h3 className="text-white  text-4xl ">
                  Jotform enterprise search app
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Context;
