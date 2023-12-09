import React from "react";

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-9 px-4 border-b border-[#5A698F] border-solid bg-transparent placeholder:text-white placeholder:opacity-50 outline-none placeholder:text-[15px] caret-[#FC4747] pb-4 placeholder:font-light text-white text-[15px] font-light "
    />
  );
}

export default Input;
