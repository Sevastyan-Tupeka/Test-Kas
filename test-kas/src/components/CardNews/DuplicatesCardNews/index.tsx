//как я понял здесь мы должны найти из массива всех постов похожие посты на наш пост

import { use, useState } from "react";
import { useDataAllNewsContext } from "../../../context/DataAllNews.Provider";
import SmallCardNews from "../../SmallCardNews";
import { IData_SnippetNews } from "../type";
import "./index.scss";
import CustomSelectCardNews from "./CustomSelectCardNews";

export default function DuplicatesCardNews() {
  const [sort, setSort] = useState<keyof IData_SnippetNews>("REACH");
  const [isOpen, setIsOpen] = useState(false);
  const duplicates = useDataAllNewsContext();
  duplicates.sort((a, b) => {
    if (sort === "REACH") {
      return b[sort] - a[sort];
    } else {
      let aDate = Number(new Date(a.DP).getTime());
      let bDate = Number(new Date(b.DP).getTime());
      return bDate - aDate;
    }
  });

  if (duplicates) {
    return (
      <div className="card-news-duplicates">
        <div className="card-news-duplicates-head">
          <span className="card-news-duplicates__counter">
            <span>Duplicates:</span> {duplicates.length}
          </span>
          <CustomSelectCardNews
            onChange={(value) => setSort(value)}
          ></CustomSelectCardNews>
        </div>
        <div className="card-news-duplicates-small-cards">
          <SmallCardNews news={duplicates[0]}></SmallCardNews>
          <div
            className={
              isOpen
                ? "card-news-duplicates-small-cards_rest active"
                : "card-news-duplicates-small-cards_rest"
            }
          >
            {duplicates.map((news, index) => {
              if (index !== 0)
                return <SmallCardNews news={news}></SmallCardNews>;
            })}
          </div>
        </div>
        <button
          className="card-news-duplicates__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          {isOpen ? "Close Duplicates" : "View Duplicates"}
        </button>
      </div>
    );
  }
  return null;
}
