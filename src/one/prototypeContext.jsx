import { createContext, useState } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);
  const [fontFam, setFontFam] = useState("font-serif");

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
  function FontSerif() {
    setFontFam("font-serif");
  }

  function FontSansSerif() {
    setFontFam("font-sans");
  }

  function FontMono() {
    setFontFam("font-mono");
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

  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,
        fontFam,

        showAbstract,
        section,
        setShowAbstract,
        NextSection,
        PreviousSection,
        FontMono,
        FontSansSerif,
        FontSerif,
        SwitchFont,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
