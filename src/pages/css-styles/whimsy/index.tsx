import { Tabs } from "antd";
import GradientColor from "./GradientColor";

/** css 奇思妙想 */
const Whimsy = () => {
  return (
    <Tabs
      defaultActiveKey="gradientColor"
      tabPosition="left"
      tabBarStyle={{ backgroundColor: "white", padding: "12px 0" }}
      items={[
        {
          key: "gradientColor",
          label: "渐变色",
          children: <GradientColor id="gradientColor" />,
        },
      ]}
    />
  );
};

export default Whimsy;
