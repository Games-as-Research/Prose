import Markdown from "react-markdown";
import PrototypeContext from "./prototypeContext";
import { useContext } from "react";

const TheBibliography = (props) => {
  const PC = useContext(PrototypeContext);

  if (PC.version === 1.1) {
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
  }

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-col overflow-y-scroll bg-slate-100 rounded-md">
        {PC.ArticleData?.bibliography.map((item, idx) => {
          return (
            <Markdown key={idx} className={"text-wrap text-sm my-2 mx-5"}>
              {"[" + item.id + "] " + item.title}
            </Markdown>
          );
        })}
      </div>
    </div>
  );
};


export default TheBibliography;