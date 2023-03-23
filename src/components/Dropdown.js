import React, { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

const Dropdown = ({ names }) => {
  var options = names.map((name) => ({ value: name.name, label: name.name }));

  const [selectedElements, setSelectedElements] = useState(null);

  const loadNames = (searchValue, callback) => {
    const filteredNames = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    callback(filteredNames);
  };

  const handleInput = (selectedItem) => {
    setSelectedElements(selectedItem);
    console.log(selectedElements);
  };

  return (
    <AsyncSelect
      id="names"
      className="text-sm text-gray-500 border-1 "
      isMulti
      loadOptions={loadNames}
      onChange={handleInput}
    ></AsyncSelect>
  );
};

export default Dropdown;
