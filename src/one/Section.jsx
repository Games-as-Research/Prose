import Markdown from "react-markdown";
import PrototypeContext from "./prototypeContext";
import { useContext } from "react";

const ArticleSection = (props) => {
  const PC = useContext(PrototypeContext);
  let para_count = 0;

  return (
    <div className="flex flex-col bg-slate-50 rounded-md overflow-y-scroll">
      <div className="flex flex-col overflow-y-scroll rounded-md">
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
                <p className="self-center text-xs font-light text-slate-400 font-sans">
                  {++para_count}
                </p>
              ) : null}
              <Markdown
                className={
                  "text-justify text-wrap text-sm px-2 rounded-lg " +
                  (PC.version === 1.1
                    ? " hover:font-semibold hover:-translate-y-1 hover:text-sm hover:bg-slate-200 hover:shadow-md  transition delay-50 duration-300 ease-in-out "
                    : "")
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

export default ArticleSection;