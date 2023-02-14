import { useRef, useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { Link } from "react-router-dom";
import Result from "./Result";
import CheckBox from "./CheckBox";
import InputField from "./InputField";

const Context = ({ names }) => {
  const [realFormId, setRealFormId] = useState("");
  const [success, setSuccess] = useState(false);

  const [filterInfo, setFilterInfo] = useState([]);
  const [filter, setFilter] = useState("");
  const [dummyFilter, setDummyFilter] = useState("");
  const [enterpriseNames, setEnterpriseNames] = useState(["now"]);
  return (
    <div className="relative h-[650px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <div className="container flex justify-between absolute top-0 z-20 items-center left-1/2 -translate-x-1/2 h-full">
        <div>
          <InputField
            names={names}
            filterInfo={filterInfo}
            setFilterInfo={setFilterInfo}
            filter={filter}
            setFilter={setFilter}
            setSuccess={setSuccess}
            dummyFilter={dummyFilter}
            setDummyFilter={setDummyFilter}
            setRealFormId={setRealFormId}
            setEnterpriseNames={setEnterpriseNames}
          />
        </div>
        <div className="w-[700px] min-w-[400px]">
          {success ? (
            <div>
              <Result
                realFormId={realFormId}
                filterInfo={filterInfo}
                filter={filter}
                enterpriseNames={enterpriseNames}
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
