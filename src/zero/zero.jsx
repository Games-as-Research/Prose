import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useState } from "react";

const Zero = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer>
        <ControlPanel />
        <Article />
      </ScreenContainer>
    </PrototypeProvider>
  );
};

export default Zero;

const Article = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="flex flex-col bg-slate-50 w-full font-sans">
      <ArticleAbstract
        title={PC.ArticleData.title}
        abstract={PC.ArticleData.abstract}
        keywords={PC.ArticleData.keywords}
      />

      <div className="flex overflow-y-hidden">
        <ArticleSection
          sectionTitle={
            (PC.section + 1).toString() +
            ". " +
            PC.ArticleData.sections[PC.section].title
          }
          content={PC.ArticleData.sections[PC.section].paragraphs}
        />
      </div>
    </div>
  );
};

const ArticleAbstract = (props) => {
  const [hold, setHold] = useState(false);
  const PC = useContext(PrototypeContext);

  if (!PC.showAbstract) {
    return (
      <h1
        className="text-center text-md my-2 text-wrap mx-1 font-bold py-4"
        onMouseOver={() => (hold ? null : PC.setShowAbstract(true))}
        onClick={() => setHold(!hold)}
      >
        {props.title}
      </h1>
    );
  }

  return (
    <div
      className="bg-slate-200 rounded-md py-4"
      onMouseLeave={() => {
        if (!hold) {
          PC.setShowAbstract(false);
          setHold(false);
        }
      }}
      onClick={() => setHold(!hold)}
    >
      <h1 className="text-center text-md my-2 text-wrap mx-1 font-bold">
        {props.title}
      </h1>
      <h2
        className="text-center text-md my-5 mx-4 font-semibold"
        style={{ color: hold ? "blue" : "black" }}
      >
        Abstract
      </h2>
      <Markdown className={"text-justify text-wrap text-md my-2 mx-5"}>
        {props.abstract}
      </Markdown>
      <div className="flex mx-5">
        <p className="font-bold mr-1">{"Keywords: "}</p>
        <p className="text-md">{props.keywords.join("; ")}</p>
      </div>
    </div>
  );
};
const ArticleSection = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-row justify-between my-5 mx-4">
        <button className="font-bold" onClick={PC.PreviousSection}>
          {"<"}
        </button>
        <h2 className="text-center text-md font-semibold ">
          {props.sectionTitle}
        </h2>
        <button className="font-bold" onClick={PC.NextSection}>
          {">"}
        </button>
      </div>

      <div className="flex flex-col overflow-y-scroll bg-slate-100 rounded-md">
        {props.content?.map((item, idx) => {
          return (
            <Markdown
              key={idx}
              className={"text-justify text-wrap text-md my-2 mx-5"}
            >
              {item}
            </Markdown>
          );
        })}
      </div>
    </div>
  );
};

const ControlPanel = (props) => {
  return (
    <div className="bg-black text-white w-2/5 h-full flex-col font-mono text-center">
      {/* Title and Intro */}

      <div className="">
        <h1 className="text-white  font-medium text-xl my-5">
          Prose: Prototype Zero
        </h1>
        <p className="text-white text-wrap font-light text-sm mx-5">
          This is the base prototype that deals with the core structure of a
          scientific article.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col my-10">
        <div>
          <h2>Font Size</h2>
        </div>

        <div>
          <h2>Font Family</h2>
        </div>

        <div>
          <h2>Font Alignment</h2>
        </div>
      </div>
    </div>
  );
};
