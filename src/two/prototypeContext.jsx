import { createContext, useEffect, useState, useRef } from "react";
import ArticleData from "../assets/ArticleData";

const PrototypeContext = createContext();

export const PrototypeProvider = (props) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [section, setSection] = useState(0);
  const [fontFam, setFontFam] = useState("font-serif");
  const [version, setVersion] = useState(2.0);
  const [horizontalMargins, setHorizontalMargins] = useState(4);
  const [bold, setBold] = useState(true);
  const [hover, setHover] = useState(true);

  const sectionRef = useRef(null);
  const chatRef = useRef(null);
  const notesRef = useRef(null);

  const [writing, setWriting] = useState(
    localStorage.getItem("PROSE-WRITING-HISTORY") ?? "Write and Reflect here"
  );

  const [chatHistory, setChatHistory] = useState([
    "My `chat` **reflections** go here",
    "as discrete *markdown* ~entities~ notes.",
    "```I can even reference the paragraphs by doublclicking them```",
    "`[S1.P2]`: introduces the questions for this paper",
  ]);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("PROSE-WRITING-HISTORY", writing);
  }, [writing]);

  useEffect(() => {
    localStorage.setItem("PROSE-CHAT-HISTORY", chatHistory.toString());
  }, [chatHistory]);

  function NextSection() {
    if (section === ArticleData.sections.length) {
      setSection(0);
    } else {
      setSection(section + 1);
    }
    sectionRef.current.scrollTo(0, 0);
  }

  function PreviousSection() {
    if (section === 0) {
      setSection(ArticleData.sections.length);
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
    if (version === 2.0) {
      setVersion(2.1);
    } else if (version === 2.1) {
      setVersion(2.2);
    } else if (version === 2.2) {
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
        } else if (version > 2.0) {
          setWriting(
            writing + "\n\n[S" + (section + 1) + ".P" + para.toString() + "]:"
          );
        }
      }
    }
    notesRef.current?.focus();
  }

  function AddSectionMarkToChatMessage(para) {
    if (para) {
      if (section === ArticleData.sections.length) {
        // Referencing Bibliography
        setChatMessage(chatMessage + " [" + para.toString() + "] ");
      } else {
        setChatMessage(
          chatMessage + " `[S" + (section + 1) + ".P" + para.toString() + "]` "
        );
      }
      chatRef.current?.focus();
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

  function AddToChatHistory() {
    if (chatMessage != "") {
      setChatHistory([...chatHistory, chatMessage]);
      setChatMessage("");
    }
  }

  function DownloadChat() {
    const element = document.createElement("a");
    const file = new Blob([chatHistory.join("\n---\n")], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);
    element.download = "Prose-Notes.MD";

    document.body.appendChild(element); // Required for this to work in FireFox

    element.click();
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
        hover,
        sectionRef,
        chatHistory,
        chatMessage,
        section,
        showAbstract,
        chatRef,
        notesRef,

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
        ToggleHover,
        setChatHistory,
        setChatMessage,
        AddToChatHistory,
        AddSectionMarkToChatMessage,
        DownloadChat,
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default PrototypeContext;
