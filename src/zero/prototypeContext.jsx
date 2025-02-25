import { createContext, useState } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [horizontalMargins, setHorizontalMargins] = useState(4);
  const [version, setVersion] = useState(0.0);
  const [fontFam, setFontFam] = useState("font-sans");
  const [bold, setBold] = useState(false);
  const [hover, setHover] = useState(false);

  function ChangeVersion() {
    if (version === 0.0) {
      setVersion(0.1);
    } else {
      setVersion(0.0);
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

  function ToggleBold() {
    if (bold) setBold(false);
    else setBold(true);
  }

  function ToggleHover() {
    if (hover) setHover(false);
    else setHover(true);
  }

  return (
    <PrototypeContext.Provider
      value={{
        version,
        hover,
        bold,
        fontFam,
        ArticleData,
        horizontalMargins,
        setHorizontalMargins,
        ChangeVersion,
        ToggleBold,
        SwitchFont,
        ToggleHover,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
