import PrototypeContext from "./prototypeContext";
import { useContext } from "react";

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

export default ArticleSectionHeader;