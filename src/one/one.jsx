import Markdown from "react-markdown";
import { ScreenContainer } from "../common";
import PrototypeContext, { PrototypeProvider } from "./prototypeContext";
import { useContext, useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";

import ArticleAbstract from "./Abstract";
import ArticleSection from "./Section";
import TheBibliography from "./Bibliography";
import ControlPanel from "./ControlPanel";
import ArticleSectionHeader from "./SectionHeader";

const One = (props) => {
  return (
    <PrototypeProvider>
      <ScreenContainer className="flex-col max-h-screen">
        <ControlPanel />
        <Article />
      </ScreenContainer>
    </PrototypeProvider>
  );
};

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

      {PC.section == PC.ArticleData.sections.length ? (
        <TheBibliography />
      ) : (
        <div className="flex overflow-y-hidden">
          <ArticleSection
            content={PC.ArticleData.sections[PC.section].paragraphs}
          />
        </div>
      )}
    </div>
  );
};

export default One;
