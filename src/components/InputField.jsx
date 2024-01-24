import React from "react";

const InputField = ({
  placeholder,
  onChange,
  type,
  maxLength,
  minLength,
  onKeyDown,
  style,
}) => {
  return (
    <>
      <input
        type={type}
        className={`${style} "`}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default InputField;
