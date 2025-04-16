import HeadCardNews from "./HeadCardNews";
import "./index.scss";
import TextCardNews from "./TextCardNews";

export default function CardNews() {
  return (
    <div className="card-news">
      <div className="card-news-content">
        <HeadCardNews></HeadCardNews>
        <TextCardNews></TextCardNews>
        <a href="" className="card-news__link">
          Original Source
        </a>
      </div>
    </div>
  );
}
