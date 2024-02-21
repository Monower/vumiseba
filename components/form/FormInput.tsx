import React from "react";

export default function FormInput({ name, type, label, placeholder, minL, maxL, ...rest }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <label
          htmlFor={name}
          className="text-14 lg:text-20 lg:w-[30%] text-left after:content-['_*'] after:text-red-600"
        >
          {label}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full"
          placeholder={placeholder}
          {...rest}
          minLength={minL ?? ''}
          maxLength={maxL ?? ''}
          required
        />
      </div>
    </>
  );
}
