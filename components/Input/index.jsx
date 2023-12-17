import React from "react";
import clsx from "clsx";
function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(
        "w-full h-9 px-4 border-b border-[#5A698F] border-solid bg-transparent placeholder:text-white placeholder:opacity-50  placeholder:text-[15px] caret-[#FC4747] pb-4 placeholder:font-light text-white text-[15px] font-light outline-none  ",
        className
      )}
    />
  );
}

export default Input;
