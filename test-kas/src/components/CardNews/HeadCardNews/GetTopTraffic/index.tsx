import { IData_TrafficItem } from "../../type";
import "./index.scss";
interface GetTopTrafficProps {
  traffics: IData_TrafficItem[];
}

export default function GetTopTraffic({ traffics }: GetTopTrafficProps) {
  const data = traffics.sort((a, b) => b.count - a.count);

  return (
    <>
      <span className="top-traffic">
        Top Traffic:{" "}
        {data.map((traffic, index) => {
          return (
            <span className="top-traffic__elem" key={index}>
              {traffic.value}
              <span className="top-traffic__elem-num">
                {String(traffic.count * 100).slice(0, 1)}%
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}
