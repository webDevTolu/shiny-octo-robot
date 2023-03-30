import React from "react";

interface InputProps {
  label: string;
  type: "text" | "password";
}

const Input = ({ label, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={label}
        className="capitalize text-lg font-medium text-slate-600"
      >
        {label}
      </label>
      <input type={type} placeholder={`Enter your ${label}`} id={label} />
    </div>
  );
};

export default Input;
