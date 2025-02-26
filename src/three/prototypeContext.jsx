import { createContext, useEffect, useState, useRef } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);
  const [fontFam, setFontFam] = useState("font-serif");
  const [version, setVersion] = useState(3.0);
  const [horizontalMargins, setHorizontalMargins] = useState(4);
  const [bold, setBold] = useState(true);
  const sectionRef = useRef(null);

  const [writing, setWriting] = useState(
    localStorage.getItem("PROSE-WRITING-HISTORY") ?? "Write and Reflect here"
  );

  useEffect(() => {
    localStorage.setItem("PROSE-WRITING-HISTORY", writing);
  }, [writing]);

  function NextSection() {
    if (section === ArticleData.sections.length + 1) {
      setSection(0);
    } else {
      setSection(section + 1);
    }
    sectionRef.current.scrollTo(0, 0);
  }

  function PreviousSection() {
    if (section === 0) {
      setSection(ArticleData.sections.length + 1);
    } else {
      setSection(section - 1);
    }

    sectionRef.current.scrollTo(0, 0);
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
    if (version === 3.0) {
      setVersion(3.0); // change this to 3.1 if you want a version change
    } else if (version === 3.1) {
      setVersion(3.0);
    }
  }

  function AddSectionMarkToNotes(para) {
    if (para) {
      if (section === ArticleData.sections.length + 1) {
        // Referencing Bibliography
        setWriting(writing + "\n\n[" + para.toString() + "]:");
      } else {
        setWriting(
          writing + "\n\n[S" + (section + 1) + ".P" + para.toString() + "]:"
        );
      }
    }
  }

  function ToggleBold() {
    if (bold) setBold(false);
    else setBold(true);
  }

  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,
        fontFam,
        version,
        horizontalMargins,
        writing,
        bold,
        sectionRef,
        showAbstract,
        section,
        setSection,
        setWriting,
        setHorizontalMargins,
        setShowAbstract,
        NextSection,
        PreviousSection,
        SwitchFont,
        ChangeVersion,
        AddSectionMarkToNotes,
        ToggleBold,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
