import React from "react";

function ButtonWithIcon({ Name, Icon, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`group hover:bg-white inline-flex items-center bg-[var(--color-white)] text-black bg-brand hover:bg-brand-strong box-border border border-transparent font-medium text-base px-4 py-3.5 cursor-pointer transition-all duration-200 ${className}`}
    >
      {Name}
      {Icon && (
        <Icon className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:text-[var(--color-blue)] transition-all duration-400" />
      )}
    </button>
  );
}

export default ButtonWithIcon;
