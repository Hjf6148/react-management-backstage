import { Tabs } from "antd";
import AutoPlayCarousel from "./AutoPlayCarousel";
import DotPositionCarousel from "./DotPositionCarousel";

/** 走马灯 */
const AntdCarousel = () => {
  return (
    <Tabs
      defaultActiveKey="autoplay"
      tabBarStyle={{ padding: "8px 12px 0", backgroundColor: "#FFFFFF" }}
      items={[
        {
          key: "autoplay",
          label: "自动切换",
          children: <AutoPlayCarousel />,
        },
        {
          key: "dotPosition",
          label: "dot 位置",
          children: <DotPositionCarousel />,
        },
      ]}
    />
  );
};

export default AntdCarousel;
