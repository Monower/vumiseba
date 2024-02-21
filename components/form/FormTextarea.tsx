import React from "react";

export default function FormTextarea({ name, label, placeholder, ...rest }) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label
        htmlFor={name}
        className="text-14 leading-[16.9px] lg:text-20 lg:leading-[22.98px] lg:w-[30%] lg:pt-[.75rem] text-left"
      >
        {label}
      </label>

      <textarea
        id={name}
        rows={6}
        name={name}
        className="col-span-3 block p-2.5 w-full text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
