import { Tabs } from "antd";
import GradientColors from "./GradientColors";
import InteractButtons from "./InteractButtons";
import MouseIcon from "./MouseIcon";
import Pets from "./DesktopPets";
import Rainbow from "./Rainbow";

/** css 奇思妙想 */
const Whimsy = () => {
  return (
    <Tabs
      defaultActiveKey="gradientColors"
      tabPosition="left"
      tabBarStyle={{ backgroundColor: "white", padding: "12px 0" }}
      destroyInactiveTabPane
      items={[
        {
          key: "gradientColors",
          label: "渐变色",
          children: <GradientColors />,
        },
        {
          key: "interactButtons",
          label: "交互按钮",
          children: <InteractButtons />,
        },
        {
          key: "mouseIcon",
          label: "自定义鼠标指针",
          children: <MouseIcon />,
        },
        {
          key: "desktopPets",
          label: "桌宠",
          children: <Pets />,
        },
        {
          key: "rainbow",
          label: "彩虹",
          children: <Rainbow />,
        },
      ]}
    />
  );
};

export default Whimsy;
