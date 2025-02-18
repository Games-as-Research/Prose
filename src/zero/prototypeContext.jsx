import { createContext, useState } from "react";
import ArticleData from "./ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);

  function NextSection() {
    setSection((section + 1) % ArticleData.sections.length);
  }

  function PreviousSection() {
    if (section === 0) {
      setSection(ArticleData.sections.length - 1);
    } else {
      setSection(section - 1);
    }
  }

  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,

        showAbstract,
        section,
        setShowAbstract,
        NextSection,
        PreviousSection,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
