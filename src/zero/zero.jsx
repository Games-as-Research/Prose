import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useState } from "react";
import remarkGfm from "remark-gfm";

const Zero = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer className="flex-col">
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
        year={PC.ArticleData.year}
        authors={PC.ArticleData.authors.join(", ")}
        citation={PC.ArticleData.citation}
      />

      <div className="flex flex-col">
        {PC.ArticleData.sections.map((itm, itx) => {
          return (
            <ArticleSection
              sectionTitle={(itx + 1).toString() + ". " + itm.title}
              content={itm.paragraphs}
            />
          );
        })}
      </div>
      <TheBibliography />
    </div>
  );
};

const ArticleAbstract = (props) => {
  return (
    <div className="bg-slate-200 rounded-md py-4">
      <h1 className="text-center text-md my-2 text-wrap mx-1 font-bold">
        {props.title}
      </h1>
      <p className="text-center text-sm my-2 text-wrap mx-1">{props.authors}</p>
      <p className="text-center text-sm my-2 text-wrap mx-1">
        {"(" + props.year + ")"}
      </p>
      <h2 className="text-center text-md my-5 mx-4 font-semibold">Abstract</h2>
      <Markdown className={"text-left text-wrap text-md my-2 mx-5"}>
        {props.abstract}
      </Markdown>
      <div className="flex mx-5">
        <p className="font-bold mr-2">{"Keywords: "}</p>
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
const ArticleSection = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-row justify-center my-5 mx-4">
        <h2 className="text-center text-md font-semibold ">
          {props.sectionTitle}
        </h2>
      </div>

      <div className="flex flex-col overflow-y-scroll bg-slate-100 rounded-md">
        {props.content?.map((item, idx) => {
          return (
            <Markdown
              key={idx}
              remarkPlugins={[remarkGfm]}
              className={"text-wrap text-md my-2 mx-5"}
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
      <div className="flex flex-row justify-center my-5 mx-4">
        <h2 className="text-center text-md font-semibold ">Bibliography</h2>
      </div>
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
  return (
    <div className="flex  w-screen bg-black text-white  font-mono p-4 justify-between">
      {/* Title and Intro */}

      <div className="flex flex-row justify-between w-full">
        <h1 className="text-white font-medium text-xl">Prototype Zero</h1>

        {/* Controls */}
        <div className="flex flex-row self-center">
          <p className="text-xs">
            Affording fluidity and erasing the article-reader boundary.
          </p>
          {/* <div>
            <h2>Font Size</h2>
          </div>

          <div>
            <h2>Font Family</h2>
          </div>

          <div>
            <h2>Font Alignment</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};
