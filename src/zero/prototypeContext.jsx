import { createContext, useState } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
