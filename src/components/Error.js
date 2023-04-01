import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center  bg-red-100 border border-red-400 text-red-700">
      <div className=" px-4 py-3 rounded flex items-center" role="alert">
        <BsFillExclamationCircleFill className="h-6 w-6 mr-4" />
        <span className=" text-lg">{message}</span>
      </div>
    </div>
  );
};

export default Error;
