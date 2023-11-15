import { Tabs } from "antd";
import GradientColors from "./GradientColors";
import InteractButtons from "./InteractButtons";

/** css 奇思妙想 */
const Whimsy = () => {
  return (
    <Tabs
      defaultActiveKey="gradientColors"
      tabPosition="left"
      tabBarStyle={{ backgroundColor: "white", padding: "12px 0" }}
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
      ]}
    />
  );
};

export default Whimsy;
