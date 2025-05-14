import * as React from "react";
import Card from "./Card";
import { DatePicker } from "antd";
import { useNavigate } from "react-router";

export const data = [
  {
    id: "item-1",
    name: "Prototype Zero",
    description:
      "Prototype Zero deals with the erasure of the reader-article boundary. This incorporates the bare minimum form of the academic article that needs to be present. This demonstrates how the article needs to be fluid and take up the form of the digital device. The existence of this form, especially on the web allows the user to configure how-many ever views they want without having to worry about the right size -- the size of the window *is* the size of the page.",
    actionText: "Try Prototype",
    route: "/zero",
  },
  {
    id: "item-2",
    name: "Prototype One",
    description:
      "Prototype One enhances the interface with meta-interactions and meta-cues. This is meant to demonstrate the importance of these seemingly invisible responses that the system sends to the users. Continuity is represented by smooth scrolling, and a shift is demonstrated by a jump so sections switch horizontally but continue vertically. Hovering on a paragraph foregrounds it and guides the attention to focus on the article. There are markers that situate the reader linearly in a text: The constant presence of the heading and paragraph numbers are metacues for orientation. ",
    actionText: "Try Prototype",
    route: "/one",
  },
  {
    id: "item-3",
    name: "Prototype Two",
    description: `Prototype Two introduces writing alongside the reading, in a way that allows the reader to think along the article. After the ability to read with all metacues and customization, we feel limited without the ability to write. 
      This prototype explores how we can now write in different ways alongside the article.`,
    actionText: "Try Prototype",
    route: "/two",
  },
  {
    id: "item-3",
    name: "Prototype Three",
    description:
      "Prototype Three introduces embedding software: simulations, live graphs, and in this case: a game build.",
    actionText: "Try Prototype",
    route: "/three",
  },
];

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen px-20 pt-12 pb-4 bg-black max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-full max-md:max-w-full">
        <h1 className="text-4xl font-medium text-center text-white italic">
          Affordances of Interactive Reading
        </h1>
        <div className="self-stretch mt-10 mb-20 max-md:max-w-full">
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
      </div>
    </div>
  );
};

export default App;
