import { useState } from "react";
import { useDataNewsContext } from "../../../context/DataNews.Provider";
import "./index.scss";
import CardsKeyWords from "./CardsKeyWords";

export default function TextCardNews() {
  const [isOpenText, setIsOpen] = useState(false);

  let news = useDataNewsContext();

  const onClickButtonText = () => {
    setIsOpen(!isOpenText);
  };
  return (
    <div className="card-news-wrap-text">
      <div className="card-news-text__highlights">
        <p dangerouslySetInnerHTML={{ __html: news.HIGHLIGHTS.join("; ") }}></p>
      </div>
      <div
        className={
          isOpenText
            ? "card-news-text__text-full active"
            : "card-news-text__text-full"
        }
      >
        <p>{news.AB}</p>
      </div>
      <button className="card-news-text__button" onClick={onClickButtonText}>
        {isOpenText ? "Show less" : "Show more"}
        {isOpenText ? (
          <i className="fa-solid fa-caret-up"></i>
        ) : (
          <i className="fa-solid fa-caret-down"></i>
        )}
      </button>
      <CardsKeyWords keyWords={news.KW}></CardsKeyWords>
    </div>
  );
}
