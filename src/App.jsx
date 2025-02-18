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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    actionText: "Test Prototype",
    route: "/one",
  },
  {
    id: "item-3",
    name: "Prototype Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    actionText: "Test Prototype",
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
          Copyrights © Muhammad Shahrom Ali January 2025. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default App;
