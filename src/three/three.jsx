import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useEffect, useState } from "react";
import { Slider } from "antd";

const Three = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer className="flex-col max-h-screen">
        <ControlPanel />
        <Article />
      </ScreenContainer>
    </PrototypeProvider>
  );
};

export default Three;

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
        {PC.section == PC.ArticleData.sections.length + 1 ? (
          <TheBibliography />
        ) : PC.section === PC.ArticleData.sections.length ? (
          <PlayableBuild />
        ) : (
          <ArticleSection
            content={PC.ArticleData.sections[PC.section].paragraphs}
          />
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
      className="write mr-4 my-1 rounded-md p-2 text-sm w-[26%] bg-slate-100"
      value={PC.writing ?? ""}
      rows={PC.writing ? PC.writing.split("\n").length + 1 : 0}
      placeholder="Write and reflect here..."
      onChange={(e) => {
        PC.setWriting(e.target.value);
      }}
    />
  );
};

const PlayableBuild = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="relative w-[70%] pb-[56.25%] pt-[25] h-0 ml-4 mt-4 border-[2px] border-black rounded-lg">
      <iframe
        className="rounded-lg absolute top-0 left-0 w-[100%] h-[100%] "
        title="Work (2017) [1]"
        src="https://pippinbarr.com/itisasifyouweredoingwork/"
      />
    </div>
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
      <div className="flex flex-row w-full px-4 py-2">
        <div className="w-[100%] bg-slate-300 rounded-md">
          <h4
            className="text-center text-md my-5 mx-4 font-semibold"
            style={{ color: hold ? "red" : "black" }}
          >
            Sections
          </h4>
          {[
            ...PC.ArticleData.sections,
            { title: "Playable Build" },
            { title: "Bibliography" },
          ].map((itm, idx) => {
            return (
              <h2
                className={
                  "text-wrap text-md my-2 mx-5 hover:text-red-500 hover:cursor-pointer " +
                  (idx == PC.section ? "font-semibold" : "")
                }
                key={idx}
                onClick={(e) => {
                  PC.setSection(idx);
                  e.stopPropagation();
                }}
              >
                {(idx + 1).toString() + ". " + itm.title.trim()}
              </h2>
            );
          })}
        </div>
        <div className="flex flex-col ">
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
      </div>
    </div>
  );
};

const ArticleSectionHeader = (props) => {
  const PC = useContext(PrototypeContext);

  let title = "";

  if (PC.section == PC.ArticleData.sections.length + 1) {
    title = (PC.section + 1).toString() + ". Bibliography";
  } else if (PC.section == PC.ArticleData.sections.length) {
    title =
      (PC.ArticleData.sections.length + 1).toString() + ". Playable Build";
  } else {
    title =
      (PC.section + 1).toString() +
      ". " +
      PC.ArticleData.sections[PC.section].title;
  }
  return (
    <div className="flex flex-row justify-between mb-1 mx-4">
      <button
        className="font-mono font-black bg-slate-200 p-0.5 size-10 rounded-md hover:bg-slate-400 ml-10"
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
  let para_count = 0;
  const [stylestr, setStylestr] = useState(
    "text-justify text-wrap text-sm rounded-lg  hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out hover:font-semibold"
  );

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
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll mr-4">
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
  const base_style = "text-wrap text-md rounded-lg  my-2 mx-5 ";
  const hover_style =
    " hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out ";
  const bold_style =
    " hover:font-semibold transition delay-50 duration-300 ease-in-out ";

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
              <Markdown
                className={
                  base_style + (PC.bold ? bold_style + hover_style : "")
                }
              >
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
        Prototype Three: Live Software Embedding
      </h1>
      <div className="flex flex-row w-[35%] space-x-5 justify-end">
        <div className="bg-white w-[20%] rounded-md px-2">
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

        <button
          className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
          onClick={PC.ToggleBold}
        >
          {PC.bold ? "bold hover" : "no bold"}
        </button>

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
