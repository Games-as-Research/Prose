import * as React from "react";
import Markdown from "react-markdown";

function Card({ name, description, actionText, onAction }) {
  return (
    <div
      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full hover:cursor-pointer"
      onClick={onAction}
    >
      <div className="flex flex-col grow py-7 w-full text-center text-white rounded-3xl bg-zinc-300 bg-opacity-20 hover:bg-zinc-100 hover:bg-opacity-20 max-md:mt-8">
        <div className="self-center text-3xl font-bold">{name}</div>
        <div className="flex flex-col px-3 mt-16 text-sm max-md:mt-10 h-full justify-between">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default Card;
