import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import SideAnchor from "../../../components/SideAnchor";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";

const _lineSeries1 = [
  {
    name: "Email",
    type: "line",
    data: [120, 132, 101, 134, 90, 230, 210],
  },
  {
    name: "Union Ads",
    type: "line",
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: "Video Ads",
    type: "line",
    data: [150, 232, 201, 154, 190, 330, 410],
  },
  {
    name: "Direct",
    type: "line",
    data: [320, 332, 301, 334, 390, 330, 320],
  },
  {
    name: "Search Engine",
    type: "line",
    data: [820, 932, 901, 934, 1290, 1330, 1320],
  },
];
const _lineSeries2 = [
  {
    name: "Email",
    type: "line",
    data: [120, 132, 101, 134, 90, 230, 210],
  },
  {
    name: "Union Ads",
    type: "line",
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: "Video Ads",
    type: "line",
    data: [150, 232, -201, 154, -190, 330, -410],
  },
  {
    name: "Direct",
    type: "line",
    data: [320, -332, 301, -334, -390, 330, -320],
  },
  {
    name: "Search Engine",
    type: "line",
    data: [820, -932, -901, 934, 1290, -1330, 1320],
  },
];
const _areaSeries1 = [
  {
    name: "amount1",
    type: "line",
    areaStyle: {},
    data: [820, 932, 901, 934, 1290, 1330, 520],
  },
  {
    name: "amount2",
    type: "line",
    areaStyle: {},
    data: [320, 432, 301, 534, 790, 830, 920],
  },
];
const _areaSeries2 = [
  {
    name: "amount1",
    type: "line",
    areaStyle: {},
    data: [30, 42, 51, 74, 80, 90, 45],
  },
  {
    name: "amount2",
    type: "line",
    areaStyle: {},
    data: [37, -10, -29, 2, 10, -9, 21],
  },
];

const LineCharts = () => {
  const [lineSeries, setLineSeries] = useState<any[]>();
  const [areaSeries, setAreaSeries] = useState<any[]>();

  useEffect(() => {
    setLineSeries(_lineSeries1);
    setAreaSeries(_areaSeries1);
  }, []);

  return (
    <SideAnchor
      items={[
        { id: "lineChart", title: "折线图" },
        { id: "areaChart", title: "面积图" },
      ]}
    >
      <Card id="lineChart" className="mb-2.5">
        <LineChart series={lineSeries} />
        <Space>
          <Button onClick={() => setLineSeries(_lineSeries1)}>data1</Button>
          <Button onClick={() => setLineSeries(_lineSeries2)}>data2</Button>
        </Space>
      </Card>

      <Card id="areaChart" className="mb-2.5">
        <AreaChart series={areaSeries} />
        <Space>
          <Button onClick={() => setAreaSeries(_areaSeries1)}>data1</Button>
          <Button onClick={() => setAreaSeries(_areaSeries2)}>data2</Button>
        </Space>
      </Card>
    </SideAnchor>
  );
};

export default LineCharts;
