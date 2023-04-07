import React, { useState } from "react";

const SelectDays = ({ onDaysSelected }) => {
  const [days, setDays] = useState("");

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDaysSelected(days);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many days would you like to workout a week?
        <select value={days} onChange={handleChange}>
          <option value="">Select days</option>
          <option value="3">3 Fullbody</option>
          <option value="4">4 Upper Lower Upper Lower</option>
          <option value="5">5 Upper Lower Push Pull Legs</option>
          <option value="6">6 Push Pull Legs X2</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SelectDays;
