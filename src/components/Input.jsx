/* eslint-disable react/prop-types */

import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, value, type = "text",onChange, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full  p-4 bg-gray-950/30 border border-white/40 rounded-md text-white text-lg outline-none focus:border-white/80 ${className}`}
        ref={ref}
        onChange={onChange}
        value={value}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
