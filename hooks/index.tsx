import { useContext } from "react";
import { LangContext } from "../context/LangProvider";



export const useLang = () => useContext(LangContext);
