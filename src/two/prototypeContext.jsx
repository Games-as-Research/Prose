import { createContext, useEffect, useState } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);
  const [fontFam, setFontFam] = useState("font-serif");
  const [version, setVersion] = useState(2.0);
  const [horizontalMargins, setHorizontalMargins] = useState(4);

  const [writing, setWriting] = useState(
    localStorage.getItem("PROSE-WRITING-HISTORY") ?? "Write and Reflect here"
  );

  useEffect(() => {
    localStorage.setItem("PROSE-WRITING-HISTORY", writing);
  }, [writing]);

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
    if (version === 2.0) {
      setVersion(2.1);
    } else if (version === 2.1) {
      setVersion(2.0);
    }
  }

  function AddSectionMarkToNotes(para) {
    if (para) {
      if (section === ArticleData.sections.length) {
        // Referencing Bibliography
        setWriting(writing + "\n\n[" + para.toString() + "]:");
      } else {
        if (version === 2.0) {
          setWriting(
            writing +
              "\n\nSection " +
              (section + 1).toString() +
              " Paragraph " +
              para.toString() +
              "\n"
          );
        } else if (version === 2.1) {
          setWriting(
            writing + "\n\n[S" + (section + 1) + ".P" + para.toString() + "]:"
          );
        }
      }
    }
  }

  return (
    <PrototypeContext.Provider
      value={{
        ArticleData,
        fontFam,
        version,
        horizontalMargins,
        writing,

        showAbstract,
        section,
        setWriting,
        setHorizontalMargins,
        setShowAbstract,
        NextSection,
        PreviousSection,
        SwitchFont,
        ChangeVersion,
        AddSectionMarkToNotes,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
