import React, { useState } from "react";
import ReactDOM from "react-dom";
import RadioGroup from "./radioButton";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px"
};

export default function App() {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState('')
  const [valueDate, setValueDate] = useState('')

  const handleChange = (e) => setValue(e.target.value)
  return (
    <>
    <label>selected: {value}</label>
      <RadioGroup
        onChange={val => setChecked(val)}
      >
        <RadioGroup.RadioButton value={value}>
          <input onChange={handleChange} />
          <label> Sub Component </label>
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton value={value} >
          <input type="date" onChange={handleChange} value={value}/>
        </RadioGroup.RadioButton>
      </RadioGroup>
    </>
  );
}
