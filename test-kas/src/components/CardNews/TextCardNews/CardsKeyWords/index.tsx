import { useState } from "react";
import { IData_TagItem } from "../../type";
import CardKeyWords from "../CardKeyWords";
import "./index.scss";

interface CardsKeyWordsProps {
  keyWords: IData_TagItem[];
}

export default function CardsKeyWords({ keyWords }: CardsKeyWordsProps) {
  const [isOpenKeyWords, setIsOpenKeyWords] = useState(false);
  const onClickButtonKeyWords = () => {
    setIsOpenKeyWords(!isOpenKeyWords);
  };

  const remainingKeyWords: IData_TagItem[] = [];

  return (
    <div className="card-news-key-words-wrap">
      {keyWords.map((keyWord, index) => {
        if (index < 4) {
          return <CardKeyWords kw={keyWord} key={index}></CardKeyWords>;
        } else {
          remainingKeyWords.push(keyWord);
        }
      })}
      {isOpenKeyWords
        ? remainingKeyWords.map((keyWord, index) => {
            return <CardKeyWords kw={keyWord} key={index}></CardKeyWords>;
          })
        : null}
      {remainingKeyWords.length ? (
        <button
          className="card-news-key-words__button"
          onClick={onClickButtonKeyWords}
        >
          {isOpenKeyWords ? "Show less " : "Show all "}
          {isOpenKeyWords
            ? `-${remainingKeyWords.length}`
            : `+${remainingKeyWords.length}`}
        </button>
      ) : null}
    </div>
  );
}
