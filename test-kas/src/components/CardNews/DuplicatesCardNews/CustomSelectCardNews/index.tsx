import { useState } from "react";
import { IData_SnippetNews } from "../../type";
import "./index.scss";
import { useSelectShowSelectModal } from "../../../../store/selectors";
import { useDispatch } from "react-redux";
import {
  hideSelectModal,
  showSelectModal,
} from "../../../../store/SelectModal";
interface CustomSelectCardNewsProps {
  onChange: (value: keyof IData_SnippetNews) => void;
}

export default function CustomSelectCardNews({
  onChange,
}: CustomSelectCardNewsProps) {
  const [value, setValue] = useState<string>("By Relevance");
  let isOpen = useSelectShowSelectModal();
  const dispatch = useDispatch();

  const onClick = (value: keyof IData_SnippetNews) => {
    switch (value) {
      case "REACH": {
        setValue("By Relevance");
        break;
      }
      case "DP": {
        setValue("By Date");
        break;
      }
    }
    onChange(value);
    dispatch(hideSelectModal());
  };

  return (
    <div className="card-news-custom-select">
      <div
        className="card-news-custom-select__value"
        onClick={() => dispatch(showSelectModal())}
      >
        <span>{value}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div
        className={
          isOpen
            ? "card-news-custom-select__option-wrap active"
            : "card-news-custom-select__option-wrap"
        }
      >
        <button
          className="card-news-custom-select__option"
          onClick={() => onClick("REACH")}
        >
          By Relevance
        </button>
        <button
          className="card-news-custom-select__option"
          onClick={() => onClick("DP")}
        >
          By Date
        </button>
      </div>
    </div>
  );
}
