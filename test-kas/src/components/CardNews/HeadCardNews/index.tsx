import { useState } from "react";
import { useDataNewsContext } from "../../../context/DataNews.Provider";
import getDate from "../../../utils/getData";
import GetTopTraffic from "./GetTopTraffic";
import "./index.scss";

export default function HeadCardNews() {
  const [isChecked, setIsChecked] = useState(false);
  const news = useDataNewsContext();
  let date = getDate(news.DP).slice(1);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card-news-head">
      <div className="card-news-data-information">
        <ul className="card-news-data-list">
          <li className="card-news-data__elem">
            <span className="card-news-data__elem_num">
              {getDate(news.DP).slice(0, 1)}
            </span>
            {date}
          </li>
          <li className="card-news-data__elem">
            <span className="card-news-data__elem_num">{news.REACH}K </span>
            Reach
          </li>
          <li className="card-news-data__elem">
            {<GetTopTraffic traffics={news.TRAFFIC}></GetTopTraffic>}
          </li>
        </ul>
        <ul className="card-news-data-list">
          <li className="card-news-data__positive card-news-data__elem">
            Positive
          </li>
          <li className="card-news-data__button card-news-data__elem">
            <button>
              <i className="fa-solid fa-info"></i>
            </button>
          </li>
          <li className="card-news-data__checkbox card-news-data__elem">
            <input type="checkbox" checked={isChecked} onChange={onChange} />
          </li>
        </ul>
      </div>
      <a href={news.URL} className="card-news-data-link">
        <h3 className="card-news-data__title">{news.TI}</h3>
      </a>
      <div className="card-news-data-information">
        <ul className="card-news-data-list card-news-data-information_main">
          <li className="card-news-data__elem card-news-data__elem_link">
            <i className="fa-solid fa-globe"></i>
            <a href={news.URL}>{news.DOM}</a>
          </li>
          <li className="card-news-data__elem ">
            <img src={news.FAV} alt="" className="card-news-data__flag" />
            {news.CNTR}
          </li>
          <li className="card-news-data__elem">
            <i className="fa-solid fa-book-open"></i>
            {news.LANG}
          </li>
          <li className="card-news-data__elem">
            <i className="fa-solid fa-user"></i>
            {news.AU.join(", ") || "Anonymous"}
          </li>
        </ul>
      </div>
    </div>
  );
}
