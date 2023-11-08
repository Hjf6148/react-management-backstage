import SideAnchor from "../../../components/SideAnchor";
import AreaChart from "./AreaChart";
import GaugeChart from "./GaugeChart";
import LiquidChart from "./LiquidChart";
import MiniProgress from "./MiniProgress";
import MiniRingProgress from "./MiniRingProgress";

const AntdOtherChart = () => {
  return (
    <SideAnchor
      items={[
        { id: "areaChart", title: "堆叠面积图" },
        { id: "gaugeChart", title: "仪表盘" },
        { id: "liquidChart", title: "水波图" },
        { id: "miniProgress", title: "迷你进度条" },
        { id: "miniRingProgress", title: "迷你进度环图" },
      ]}
    >
      <AreaChart id="areaChart" />
      <GaugeChart id="gaugeChart" />
      <LiquidChart id="liquidChart" />
      <MiniProgress id="miniProgress" />
      <MiniRingProgress id="miniRingProgress" />
    </SideAnchor>
  );
};

export default AntdOtherChart;
