"use client";
import React, {useState} from "react";

const Checkbox = ({label, value, onChange}) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
