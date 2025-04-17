import { useState } from "react";
import getDate from "../../utils/getData";
import { IData_SnippetNews } from "../CardNews/type";
import "./index.scss";
interface SmallCardNewsProps {
  news: IData_SnippetNews;
}

export default function SmallCardNews({ news }: SmallCardNewsProps) {
  let date = getDate(news.DP);
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="small-card-news">
      <div className="small-card-news-data-information">
        <ul className="small-card-news-data-list">
          <li className="small-card-news-data__elem">{date}</li>
          <li className="small-card-news-data__elem">
            <span className="small-card-news-data__elem_num">
              {news.REACH}K Reach
            </span>
          </li>
        </ul>
        <ul className="small-card-news-data-list">
          <li className="small-card-news-data__button small-card-news-data__elem">
            <button>
              <i className="fa-solid fa-info"></i>
            </button>
          </li>
          <li className="small-card-news-data__checkbox small-card-news-data__elem">
            <input type="checkbox" checked={isChecked} onChange={onChange} />
          </li>
        </ul>
      </div>
      <a href={news.URL} className="small-card-news-data-link">
        <h3 className="small-card-news-data__title">{news.TI}</h3>
      </a>
      <div className="small-card-news-data-information">
        <ul className="small-card-news-data-list small-card-news-data-information_main">
          <li className="small-card-news-data__elem small-card-news-data__elem_link">
            <i className="fa-solid fa-globe"></i>
            <a href={news.URL}>{news.DOM}</a>
          </li>
          <li className="small-card-news-data__elem ">
            <img src={news.FAV} alt="" className="small-card-news-data__flag" />
            {news.CNTR}
          </li>
          <li className="small-card-news-data__elem">
            <i className="fa-solid fa-user"></i>
            {news.AU.join(", ") || "Anonymous"}
          </li>
        </ul>
      </div>
    </div>
  );
}
