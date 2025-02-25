import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useEffect, useState } from "react";
import { Slider } from "antd";

const Two = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer className="flex-col max-h-screen">
        <ControlPanel />
        <Article />
      </ScreenContainer>
    </PrototypeProvider>
  );
};

export default Two;

const Article = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div
      className={"flex flex-col bg-slate-50 w-full max-h-screen " + PC.fontFam}
    >
      <ArticleAbstract
        title={PC.ArticleData.title}
        abstract={PC.ArticleData.abstract}
        keywords={PC.ArticleData.keywords}
        year={PC.ArticleData.year}
        authors={PC.ArticleData.authors.join(", ")}
        citation={PC.ArticleData.citation}
      />
      <ArticleSectionHeader />

      <div className="flex overflow-y-hidden flex-row justify-between">
        {PC.section == PC.ArticleData.sections.length ? (
          <TheBibliography />
        ) : (
          <div className="flex ">
            <ArticleSection
              content={PC.ArticleData.sections[PC.section].paragraphs}
            />
          </div>
        )}
        <WritingArea />
      </div>
    </div>
  );
};

const WritingArea = (props) => {
  const PC = useContext(PrototypeContext);
  return (
    <textarea
      spellCheck="true"
      className="write mx-4 my-1 rounded-md p-2 text-sm w-screen bg-slate-100"
      value={PC.writing ?? ""}
      rows={PC.writing ? PC.writing.split("\n").length + 1 : 0}
      onChange={(e) => {
        PC.setWriting(e.target.value);
      }}
      placeholder="Write and reflect here..."
    />
  );
};

const ArticleAbstract = (props) => {
  const [hold, setHold] = useState(false);
  const PC = useContext(PrototypeContext);

  if (!PC.showAbstract) {
    return (
      <h1
        className="text-center text-md text-wrap mx-1 font-bold py-4 mb-1 hover:bg-slate-100 cursor-pointer"
        onClick={() => (hold ? null : PC.setShowAbstract(true))}
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
        style={{ color: hold ? "red" : "black" }}
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
  const PC = useContext(PrototypeContext);
  const [stylestr, setStylestr] = useState(
    "text-justify text-wrap text-sm rounded-lg  hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out hover:font-semibold"
  );
  let para_count = 0;

  useEffect(() => {
    console.log("Two::Debug");
    if (PC.bold === true) {
      setStylestr(
        "text-justify text-wrap text-sm rounded-lg  hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out hover:font-semibold"
      );
    } else {
      setStylestr(
        "text-justify text-wrap text-sm rounded-lg  hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out"
      );
    }
  }, [PC.bold]);

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll ">
      <div
        className="flex flex-col overflow-y-scroll rounded-md w-[70vw]"
        ref={PC.sectionRef}
      >
        {props.content?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={"flex flex-row py-2"}
              style={{
                paddingRight: PC.horizontalMargins,
                paddingLeft: PC.horizontalMargins,
              }}
              onDoubleClick={() => {
                PC.AddSectionMarkToNotes(idx + 1);
              }}
            >
              {item?.slice(0, 2) !== "##" ? (
                <p className="self-center text-xs font-light text-slate-400 font-sans ml-8 mr-4">
                  {++para_count}
                </p>
              ) : null}
              <Markdown className={stylestr}>{item}</Markdown>
            </div>
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
            <div
              key={idx}
              className={"flex flex-row py-2"}
              style={{
                paddingRight: PC.horizontalMargins,
                paddingLeft: PC.horizontalMargins,
              }}
              onDoubleClick={() => {
                PC.AddSectionMarkToNotes(item.id);
              }}
            >
              <p className="self-center text-xs font-light text-slate-400 font-sans ml-8 mr-4">
                {"[" + item.id + "] "}
              </p>
              <Markdown className="text-wrap text-sm rounded-lg hover:font-semibold hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md hover:p-1 transition delay-50 duration-300 ease-in-out">
                {item.title}
              </Markdown>
            </div>
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
      <h1 className="text-white  font-medium text-md self-center">
        Prototype Two: Writing
      </h1>
      <div className="flex flex-row w-[45%] justify-evenly">
        <div className="bg-white w-[40%] rounded-md px-2">
          <Slider
            min={4}
            step={4}
            max={50}
            onChange={(val) => {
              PC.setHorizontalMargins(val);
            }}
            value={
              typeof PC.horizontalMargins === "number"
                ? PC.horizontalMargins
                : 4
            }
          />
        </div>

        <button
          className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
          onClick={PC.SwitchFont}
        >
          {PC.fontFam.replace("-", " ")}
        </button>
        {PC.version == "2.1" ? (
          <button
            className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
            onClick={PC.ToggleBold}
          >
            {PC.bold ? "bold hover" : "no bold"}
          </button>
        ) : null}

        <button
          className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
          onClick={PC.ChangeVersion}
        >
          Version {PC.version}
        </button>
      </div>
    </div>
  );
};
