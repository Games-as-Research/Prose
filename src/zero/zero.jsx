import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { Slider } from "antd";

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
    <div className={"flex flex-col bg-slate-50 w-full " + PC.fontFam}>
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
  const PC = useContext(PrototypeContext);
  return (
    <div
      className="bg-slate-200 rounded-md py-4"
      style={{
        marginLeft: PC.horizontalMargins,
        marginRight: PC.horizontalMargins,
      }}
    >
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
  const base_style = "text-wrap text-md rounded-lg  my-2 mx-5 ";
  const hover_style =
    " hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out ";
  const bold_style =
    " hover:font-semibold transition delay-50 duration-300 ease-in-out ";

  if (PC.version === 0.1) {
    let para_count = 0;
    return (
      <div className="flex flex-col bg-slate-50 rounded-md">
        <div className="flex flex-row justify-center my-5 mx-4">
          <h2 className="text-center text-md font-semibold ">
            {props.sectionTitle}
          </h2>
        </div>
        <div className="flex flex-col rounded-md">
          {props.content?.map((item, idx) => {
            return (
              <div
                className={"flex flex-row py-2"}
                key={idx}
                style={{
                  marginLeft: PC.horizontalMargins,
                  marginRight: PC.horizontalMargins,
                }}
              >
                {item?.slice(0, 2) !== "##" ? (
                  <p className="self-center text-xs font-light text-slate-400 font-sans ml-2">
                    {++para_count}
                  </p>
                ) : null}
                <Markdown
                  className={
                    base_style +
                    (PC.hover ? hover_style : "") +
                    (PC.bold ? bold_style : "")
                  }
                >
                  {item}
                </Markdown>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-50 rounded-md">
      <div className="flex flex-row justify-center my-5 mx-4">
        <h2 className="text-center text-md font-semibold ">
          {props.sectionTitle}
        </h2>
      </div>

      <div
        className="flex flex-col bg-slate-100 rounded-md"
        style={{
          marginLeft: PC.horizontalMargins,
          marginRight: PC.horizontalMargins,
        }}
      >
        {props.content?.map((item, idx) => {
          return (
            <Markdown
              key={idx}
              remarkPlugins={[remarkGfm]}
              className={
                base_style +
                (PC.hover ? hover_style : "") +
                (PC.bold ? bold_style : "")
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
  const base_style = "text-wrap text-md rounded-lg  my-2 mx-5 ";
  const hover_style =
    " hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out ";
  const bold_style =
    " hover:font-semibold transition delay-50 duration-300 ease-in-out ";
  if (PC.version === 0.1) {
    return (
      <div
        className="flex flex-col bg-slate-50 rounded-md"
        style={{
          marginLeft: PC.horizontalMargins,
          marginRight: PC.horizontalMargins,
        }}
      >
        <div className="flex flex-row justify-center my-5 mx-4">
          <h2 className="text-center text-md font-semibold ">Bibliography</h2>
        </div>
        <div className="flex flex-col  bg-slate-100 rounded-md">
          {PC.ArticleData?.bibliography.map((item, idx) => {
            return (
              <div key={idx} className={"flex flex-row py-2"}>
                <p className="self-center text-xs font-light text-slate-400 font-sans ml-8 mr-4">
                  {"[" + item.id + "] "}
                </p>
                <Markdown
                  className={
                    base_style +
                    (PC.hover ? hover_style : "") +
                    (PC.bold ? bold_style : "")
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
  }
  return (
    <div
      className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll "
      style={{
        marginLeft: PC.horizontalMargins,
        marginRight: PC.horizontalMargins,
      }}
    >
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
  const PC = useContext(PrototypeContext);
  return (
    <div className="flex  w-screen bg-black text-white  font-mono p-4 justify-between">
      {/* Title and Intro */}

      <div className="flex flex-row justify-between w-full">
        <h1 className="text-white font-medium text-xl">Prototype Zero</h1>

        {/* Controls */}
        <div className="flex flex-row self-center w-[70%] space-x-5 justify-end">
          {PC.version == 0.1 ? (
            <div className="bg-white w-[20%] rounded-md px-2">
              <Slider
                min={0}
                step={1}
                max={75}
                onChange={(val) => {
                  PC.setHorizontalMargins(val * 4);
                }}
                value={
                  typeof PC.horizontalMargins === "number"
                    ? PC.horizontalMargins / 4
                    : 1
                }
              />
            </div>
          ) : null}

          {PC.version == 0.1 ? (
            <button
              className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
              onClick={PC.SwitchFont}
            >
              {PC.fontFam.replace("-", " ")}
            </button>
          ) : null}

          {PC.version == 0.1 ? (
            <button
              className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
              onClick={PC.ToggleBold}
            >
              {PC.bold ? "bold on hover" : "no bold"}
            </button>
          ) : null}

          {PC.version == 0.1 ? (
            <button
              className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
              onClick={PC.ToggleHover}
            >
              {PC.hover ? "foregrounding" : "no foregrounding"}
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
    </div>
  );
};
