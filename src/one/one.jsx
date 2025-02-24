import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useState } from "react";

const One = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer className="flex-col max-h-screen">
        <ControlPanel />
        <Article />
      </ScreenContainer>
    </PrototypeProvider>
  );
};

export default One;

const Article = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className={"flex flex-col bg-slate-50 w-full max-h-screen " + PC.fontFam}>
      <ArticleAbstract
        title={PC.ArticleData.title}
        abstract={PC.ArticleData.abstract}
        keywords={PC.ArticleData.keywords}
        year={PC.ArticleData.year}
        authors={PC.ArticleData.authors.join(", ")}
        citation={PC.ArticleData.citation}
      />

      <ArticleSectionHeader />

      {PC.section == PC.ArticleData.sections.length ? (
        <TheBibliography />
      ) : (
        <div className="flex overflow-y-hidden">
          <ArticleSection
            content={PC.ArticleData.sections[PC.section].paragraphs}
          />
        </div>
      )}
    </div>
  );
};

const ArticleAbstract = (props) => {
  const [hold, setHold] = useState(false);
  const PC = useContext(PrototypeContext);

  if (!PC.showAbstract) {
    return (
      <h1
        className="text-center text-md text-wrap mx-1 font-bold py-4"
        onMouseOver={() => (hold ? null : PC.setShowAbstract(true))}
        onClick={() => setHold(!hold)}
      >
        {props.title}
      </h1>
    );
  }

  return (
    <div
      className="bg-slate-200 rounded-md py-2"
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
      <p className="text-center text-sm my-2 text-wrap mx-1">{props.authors}</p>
      <p className="text-center text-sm my-2 text-wrap mx-1">
        {"(" + props.year + ")"}
      </p>
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
      <div className="flex mx-5 mt-2">
        <p className="font-bold mr-2">{"Reference: "}</p>
        <Markdown className={"text-sm text-blue-800"}>
          {props.citation}
        </Markdown>
      </div>
    </div>
  );
};

const ArticleSectionHeader = (props) => {
  const PC = useContext(PrototypeContext);

  let title = "";

  if (PC.section == PC.ArticleData.sections.length) {
    title = (PC.section + 1).toString() + ". Bibliography";
  } else {
    title =
      (PC.section + 1).toString() +
      ". " +
      PC.ArticleData.sections[PC.section].title;
  }
  return (
    <div className="flex flex-row justify-between mb-1 mx-4">
      <button
        className="font-mono font-black bg-slate-200 p-0.5 size-10 rounded-md hover:bg-slate-400"
        onClick={PC.PreviousSection}
      >
        {"<"}
      </button>
      <h2 className="text-center text-md font-semibold self-center">{title}</h2>
      <button
        className="font-mono font-black bg-slate-200 p-0.5 size-10 rounded-md hover:bg-slate-400"
        onClick={PC.NextSection}
      >
        {">"}
      </button>
    </div>
  );
};

const ArticleSection = (props) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-col overflow-y-scroll rounded-md">
        {props.content?.map((item, idx) => {
          return (
            <Markdown
              key={idx}
              className={
                "text-justify text-wrap text-sm py-2 mx-4 px-2 hover:font-semibold hover:text-sm hover:bg-slate-200 rounded-lg"
              }
            >
              {item}
            </Markdown>
          );
        })}
      </div>
    </div>
  );
};

const TheBibliography = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-col overflow-y-scroll bg-slate-100 rounded-md">
        {PC.ArticleData?.bibliography.map((item, idx) => {
          return (
            <Markdown key={idx} className={"text-wrap text-md my-2 mx-5"}>
              {"[" + item.id + "] " + item.title}
            </Markdown>
          );
        })}
      </div>
    </div>
  );
};

const ControlPanel = (props) => {
  const PC = useContext(PrototypeContext);
  return (
    <div className="bg-black text-white w-screen flex flex-row p-4 font-mono justify-between">
      <h1 className="text-white  font-medium text-md">
        Prototype One: Metainteractions & Metacues 
      </h1>
      <button
        className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
        onClick={PC.SwitchFont}
      >
        {PC.fontFam.replace("-", " ")}
      </button>
    </div>
  );
};
