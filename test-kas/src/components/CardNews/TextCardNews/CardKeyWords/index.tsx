import { IData_TagItem } from "../../type";
import "./index.scss";

interface CardKeyWordsProps {
  kw: IData_TagItem;
}

export default function CardKeyWords({ kw }: CardKeyWordsProps) {
  return (
    <div className="card-news-key-words">
      <span className="card-news-key-words__value">{kw.value}</span>
      <span className="card-news-key-words__num">{kw.count}</span>
    </div>
  );
}
