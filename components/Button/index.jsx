import React from "react";

function Button({ onClick, title, type }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-12 bg-[#FC4747] text-white text-[15px] font-light mt-5 rounded-md hover:bg-white hover:text-[#161D2F] "
      type={type}
    >
      {title}
    </button>
  );
}

export default Button;
