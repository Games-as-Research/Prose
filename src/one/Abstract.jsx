import Markdown from "react-markdown";
import PrototypeContext from "./prototypeContext";
import { useContext, useState } from "react";

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
                    "text-justify text-wrap text-md my-2 mx-5 hover:text-red-500 hover:cursor-pointer " +
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

export default ArticleAbstract;