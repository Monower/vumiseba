import React from "react";

export default function FormContainer({children} : {children:React.ReactNode}) {
  return (
    <div className="">
      {children}
    </div>
  );
}
