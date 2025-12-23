import React from "react";

function ButtonWithIcon() {
  return (
    <button
      type="button"
      className="group hover:bg-white inline-flex items-center bg-[var(--color-white)] text-black bg-brand hover:bg-brand-strong box-border border border-transparent font-medium text-base px-4 py-3.5 cursor-pointer transition-all"
    >
      Contact
      <img
        src="./images/arrow.svg"
        alt="arrow"
        className="group-hover:translate-x-1 size-5 transition-all duration-400"
      />
    </button>
  );
}

export default ButtonWithIcon;
