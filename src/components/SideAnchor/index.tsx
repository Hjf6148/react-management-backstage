import { useCallback, useState } from "react";
import "./index.css";

type ItemsType = {
  id: string;
  title: string;
};
interface SideAnchorProps {
  items?: ItemsType[];
  children?: React.ReactNode;
}
const SideAnchor = ({ items, children }: SideAnchorProps) => {
  const [select, setSelect] = useState<ItemsType | undefined>(items?.[0]);

  const handleSelectId = useCallback((item: ItemsType) => {
    setSelect(item);
    const chartId = document.getElementById(item.id);
    chartId?.scrollIntoView({ block: "start" });
  }, []);

  return items?.length ? (
    <div className="flex">
      <div className="flex-1 pr-3 box-border">{children}</div>
      <div className="relative bg-white pl-2 pr-4 pt-3 pb-4 border-solid border-gray-200 border-0 border-l">
        <div
          className="sticky z-0 top-4"
          style={{ color: "rgba(0, 0, 0, 0.88)" }}
        >
          {items?.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer my-1.5 ${
                select?.id === item.id ? "select-id" : ""
              }`}
              onClick={() => handleSelectId(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default SideAnchor;
