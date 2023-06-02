import React from "react";
import Select from "react-select";

const DropdownMenu = ({ options, onSelect, filter }) => {
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    onSelect(selectedValues);
  };

  const dropdownOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div>
      <h3>{filter}</h3>
      <Select options={dropdownOptions} isMulti onChange={handleChange} />
    </div>
  );
};

export default DropdownMenu;
