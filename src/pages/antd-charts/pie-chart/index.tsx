import SideAnchor from "../../../components/SideAnchor";
import PieSpider from "./PieSpider";
import PieQuarterRound from "./PieQuarterRound";
import DonutChart from "./DonutChart";

const AntdPieChart = () => {
  return (
    <SideAnchor
      items={[
        { id: "pieSpider", title: "饼状-蜘蛛布局" },
        { id: "pieQuarterRound", title: "四分之一圆" },
        { id: "donutChart", title: "环形图" },
      ]}
    >
      <PieSpider id="pieSpider" />
      <PieQuarterRound id="pieQuarterRound" />
      <DonutChart id="donutChart" />
    </SideAnchor>
  );
};

export default AntdPieChart;
