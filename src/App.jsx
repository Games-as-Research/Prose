import * as React from "react";
import Card from "./Card";
import { DatePicker } from "antd";
import { useNavigate } from "react-router";

export const data = [
  {
    id: "item-1",
    name: "Prototype Zero",
    description:
      "Prototype Zero deals with the erasure of the reader-article boundary. This incorporates the bare minimum form of the academic article that needs to be present. A section must scroll vertically -- it is continuous. Changes between sections are horizontal -- they are distinct and perhaps almost like pagination. Abstracts are not needed throughout the essay so they are conditionally present -- hover over the title to view the abstract. ",
    actionText: "Try Prototype",
    route: "/zero",
  },
  {
    id: "item-2",
    name: "Prototype One",
    description:
      "Prototype One enhances the interface with meta-interactions and meta-cues. This is meant to demonstrate the importance of these seemingly invisible responses that the system sends to the users.",
    actionText: "Try Prototype",
    route: "/one",
  },
  {
    id: "item-3",
    name: "Prototype Two",
    description:
      `Prototype Two introduces writing alongside the reading, in a way that allows the reader to think along the article. After the ability to read with all metacues and customization, we feel limited without the ability to write. 
      This prototype explores how we can now write in different ways alongside the article.`,
    actionText: "Try Prototype",
    route: "/two",
  },
];

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen px-20 pt-12 pb-4 bg-black max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-full max-md:max-w-full">
        <h1 className="text-4xl font-medium text-center text-white italic">
          Prose
        </h1>
        <div className="self-stretch mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {data.map((prototype, index) => (
              <Card
                key={prototype.id}
                name={prototype.name}
                description={prototype.description}
                actionText={prototype.actionText}
                onAction={() => navigate(prototype.route)}
              />
            ))}
          </div>
        </div>
        <div className="mt-7 text-xs font-light text-center text-white max-md:max-w-full">
          Copyrights © Muhammad Shahrom Ali 2025. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default App;
