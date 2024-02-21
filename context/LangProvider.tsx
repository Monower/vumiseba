import React, { createContext, useEffect, useState } from "react";
import Language from '../models/Language';


type StoreContextValue = {
    LangInfo: Language;
    HandleChange: (lang) => void;
}


export const LangContext = createContext<StoreContextValue | undefined>(undefined);

const defaultAuthInfo:Language = {
  lang: 'bang',
};

export default function LangProvider({ children }) {
  
  const [LangInfo, setLang] = useState<Language>({ ...defaultAuthInfo });



  const getLang = async () => {

    const lang = localStorage.getItem("lang");
    if (!lang) return;

    if(lang === 'eng'){
      setLang({
        lang: 'eng',
      });
    }else{
      setLang({
        lang: 'bang',
      });
    }
    
  };

  const HandleChange = (lang) => {

   if(lang === 'eng'){
      localStorage.setItem("lang", 'eng');
      setLang({
        lang:  'eng'
      });
    }else{
      localStorage.setItem("lang", 'bang');
      setLang({
        lang:  'bang'
      });
    }

  };

  useEffect(() => {
    getLang();
  }, []);


  return (
    <LangContext.Provider
      value={{ LangInfo, HandleChange }}
    >
      {children}
    </LangContext.Provider>
  );
}
