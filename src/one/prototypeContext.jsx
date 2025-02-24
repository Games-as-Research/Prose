import { createContext, useState } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);
  const [fontFam, setFontFam] = useState("font-serif");
  const [version, setVersion] = useState(1.0);
  const [horizontalMargins, setHorizontalMargins] = useState(4);

  function NextSection() {
    if (section === ArticleData.sections.length) {
      setSection(0);
    } else {
      setSection(section + 1);
    }
  }

  function PreviousSection() {
    if (section === 0) {
      setSection(ArticleData.sections.length);
    } else {
      setSection(section - 1);
    }
  }

  function SwitchFont() {
    if (fontFam == "font-serif") {
      setFontFam("font-sans");
    } else if (fontFam == "font-sans") {
      setFontFam("font-mono");
    } else if (fontFam == "font-mono") {
      setFontFam("font-serif");
    }
  }

  function ChangeVersion() {
    if (version === 1.0) {
      setVersion(1.1);
    } else if (version === 1.1) {
      setVersion(1.0);
    }
  }

  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,
        fontFam,
        version,
        horizontalMargins,

        showAbstract,
        section,
        setHorizontalMargins,
        setShowAbstract,
        NextSection,
        PreviousSection,
        SwitchFont,
        ChangeVersion,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
