import React from "react";

const Button = ({
  onClick,
  className = "",
  bgColor = "bg-primary",
  children,
  full,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize ${bgColor} ${
        full ? "w-full" : ""
      } mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
