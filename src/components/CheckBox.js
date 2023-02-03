import React from "react";

const CheckBox = ({ handleChange, value, name }) => {
  return (
    <div className="col-span-1 row-span-1 bg-purple-400 border-2 rounded-xl ">
      <div className="grid grid-rows-1 grid-cols-3">
        <input
          className="w-5 h-7 text-blue-600 bg-gray-100 border-gray-300 m-2 rounded col-span-1"
          type="checkbox"
          name="filters"
          value={value}
          onChange={handleChange}
        />
        <label className=" text-sm font-medium text-gray-900 col-span-2 items-center mt-3">
          {name}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
