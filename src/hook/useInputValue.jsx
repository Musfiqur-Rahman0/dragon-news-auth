import React, { useState } from "react";

const useInputValue = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleInputChange];
};

export default useInputValue;
