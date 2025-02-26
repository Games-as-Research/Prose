import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useEffect, useState } from "react";
import { Slider } from "antd";
import {
  ArrowDownCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/16/solid";
import remarkGfm from "remark-gfm";

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
        {PC.version === 2.2 ? <ChatHistory /> : <WritingArea />}
      </div>
      {PC.version === 2.2 ? <ChatBar /> : null}
    </div>
  );
};

const ChatHistory = (props) => {
  const PC = useContext(PrototypeContext);
  return (
    <div className="flex flex-col mx-4 my-1 rounded-md p-2 text-sm w-screen bg-slate-200 overflow-y-scroll overflow-x-scroll">
      <div className="h-5 flex flex-col">
        <ArrowDownCircleIcon
          color="#000"
          className="rounded-sm hover:bg-slate-50 hover:cursor-pointer absolute size-5 shadow-lg"
          onClick={PC.DownloadChat}
        />
        <p className="self-center font-bold">Notes</p>
      </div>
      {PC.chatHistory != []
        ? PC.chatHistory.map((itm, idx) => {
            return <ChatBubble key={idx} item={itm} />;
          })
        : null}
    </div>
  );
};

const ChatBubble = (props) => {
  return (
    <div className="w-full p-2 mt-2 text-md self-end rounded-t-md rounded-bl-md bg-slate-50 ">
      <Markdown className={"markdown"} remarkPlugins={[remarkGfm]}>
        {props.item}
      </Markdown>
    </div>
  );
};

const ChatBar = (props) => {
  const PC = useContext(PrototypeContext);

  return (
    <div className="flex flex-row items-center justify-items-center my-4 w-[100%] self-center px-10 ">
      <textarea
        className="multiple h-10 w-full mr-2 p-2 bg-slate-200 rounded-lg"
        value={PC.chatMessage}
        onChange={(e) => PC.setChatMessage(e.target.value)}
        onSubmit={PC.AddToChatHistory}
        placeholder="Write and reflect here..."
        onDoubleClick={() => {
          navigator.clipboard.readText().then((resp) => {
            PC.setChatMessage(
              PC.chatMessage +
                (PC.chatMessage == "" ? "" : "\n") +
                resp.toString().trim() +
                "\n"
            );
          });
        }}
      />

      <PaperAirplaneIcon
        onClick={PC.AddToChatHistory}
        color="#000"
        className="rounded-lg w-7 h-7 hover:bg-slate-200 self-center"
      />
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
      <div className="flex flex-row w-full px-4 py-2">
        <div className="w-[100%] bg-slate-300 rounded-md">
          <h4
            className="text-center text-md my-5 mx-4 font-semibold"
            style={{ color: hold ? "red" : "black" }}
          >
            Sections
          </h4>
          {[...PC.ArticleData.sections, { title: "Bibliography" }].map(
            (itm, idx) => {
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
            }
          )}
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
      <h2
        className="text-center text-md font-semibold self-center"
        onDoubleClick={() => {
          if (PC.version === 2.2) {
            const _header =
              (PC.chatMessage === "" ? "# " : "\n# ") +
              PC.ArticleData.sections[PC.section].title +
              "\n\n";
            PC.setChatMessage(PC.chatMessage + _header);
          }
        }}
      >
        {title}
      </h2>
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

  const base_style = "text-wrap text-md rounded-lg  my-2 mx-5 ";
  const hover_style =
    " hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md transition delay-50 duration-300 ease-in-out ";
  const bold_style =
    " hover:font-semibold transition delay-50 duration-300 ease-in-out ";

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
                if (PC.version !== 2.2) {
                  PC.AddSectionMarkToNotes(idx + 1);
                } else if (PC.version === 2.2) {
                  PC.AddSectionMarkToChatMessage(idx + 1);
                }
              }}
              onMouseUp={() => {
                const selection = window.getSelection().toString();
                navigator.clipboard.writeText(
                  "`[S" +
                    (PC.section + 1).toString() +
                    ".P" +
                    (idx + 1).toString() +
                    "]`: *" +
                    selection.trim() +
                    "*"
                );
              }}
            >
              {item?.slice(0, 2) !== "##" ? (
                <p className="self-center text-xs font-light text-slate-400 font-sans ml-8 mr-4">
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
                if (PC.version !== 2.2) {
                  PC.AddSectionMarkToNotes(item.id);
                } else if (PC.version == 2.2) {
                  PC.AddSectionMarkToChatMessage(item.id);
                }
              }}
              onMouseUp={() => {
                const selection = window.getSelection().toString();
                navigator.clipboard.writeText(selection);
              }}
            >
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
};

const ControlPanel = (props) => {
  const PC = useContext(PrototypeContext);
  return (
    <div className="bg-black text-white w-screen flex flex-row p-4 font-mono justify-between">
      <h1 className="text-white  font-medium text-md self-center">
        Prototype Two: Writing
      </h1>
      <div className="flex flex-row w-[70%] space-x-5 justify-end">
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
        {PC.version >= "2.1" ? (
          <button
            className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
            onClick={PC.ToggleBold}
          >
            {PC.bold ? "bold on hover" : "no bold"}
          </button>
        ) : null}

        {PC.version >= "2.1" ? (
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
  );
};
