import {
  AreaChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

export interface MenuType extends Omit<MenuItemType, "key" | "label"> {
  key: string;
  label: string;
}

export interface MenuGroupType extends Omit<MenuType, "children"> {
  children: MenuType[];
}

const menus: MenuGroupType[] = [
  {
    key: "echarts",
    label: "echarts 示例",
    icon: <AreaChartOutlined />,
    children: [
      {
        key: "line-charts",
        icon: <LineChartOutlined />,
        label: "折线图",
      },
      {
        key: "pie-charts",
        icon: <PieChartOutlined />,
        label: "饼状图",
      },
      {
        key: "bar-charts",
        icon: <BarChartOutlined />,
        label: "柱状图",
      },
      {
        key: "scatter-charts",
        icon: <DotChartOutlined />,
        label: "散点图",
      },
      {
        key: "radar-charts",
        icon: <RadarChartOutlined />,
        label: "雷达图",
      },
      {
        key: "other-charts",
        icon: <AreaChartOutlined />,
        label: "其他图表",
      },
    ],
  },
  {
    key: "antd-charts",
    label: "antV Charts 示例",
    icon: <AreaChartOutlined />,
    children: [
      {
        key: "line-charts",
        icon: <LineChartOutlined />,
        label: "折线图",
      },
    ],
  },
];

export default menus;
