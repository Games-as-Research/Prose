import PrototypeContext from "./prototypeContext";
import { useContext } from "react";
import { Slider } from "antd";

const ControlPanel = (props) => {
  const PC = useContext(PrototypeContext);
  return (
    <div className="bg-black text-white w-screen flex flex-row p-4 font-mono justify-between">
      <h1 className="text-white  font-medium text-md self-center">
        Prototype One: Metainteractions & Metacues
      </h1>
      <div className="flex flex-row w-[30%] space-x-5 justify-end">
        {PC.version === 1.1 ? (
          <div className="bg-white w-[40%] rounded-md px-2">
            <Slider
              min={4}
              step={4}
              max={300}
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
        ) : null}

        <button
          className="bg-white text-black text-sm p-1 rounded-md hover:bg-slate-400"
          onClick={PC.SwitchFont}
        >
          {PC.fontFam.replace("-", " ")}
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

export default ControlPanel;
