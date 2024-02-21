import React from "react";
import LangProvider from "./LangProvider";


export default function ContextProviders({ children }) {
  return (
      <LangProvider>
        {children}
      </LangProvider>
  );
}
