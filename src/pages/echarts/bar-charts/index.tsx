import { useEffect, useState } from "react";
import SideAnchor from "../../../components/SideAnchor";
import { Button, Card, Space } from "antd";
import BarChart from "./BarChart";

const _barSeries1 = [
  {
    name: "amount1",
    type: "bar",
    data: [120, 200, 150, 80, 70, 110, 130],
  },
  {
    name: "amount2",
    type: "bar",
    data: [120, 200, 150, 80, 70, 110, 130],
  },
];
const _barSeries2 = [
  {
    name: "amount1",
    type: "bar",
    data: [50, 32, 9, -15, -51, -21, 2],
  },
  {
    name: "amount2",
    type: "bar",
    data: [104, 194, 161, 59, 28, 99, 120],
  },
];

const BarCharts = () => {
  const [barSeries, setBarSeries] = useState<any[]>();

  useEffect(() => {
    setBarSeries(_barSeries1);
  }, []);

  return (
    <SideAnchor items={[{ id: "barChart", title: "柱状图" }]}>
      <Card id="barChart" className="mb-2.5">
        <BarChart series={barSeries} />
        <Space>
          <Button onClick={() => setBarSeries(_barSeries1)}>data1</Button>
          <Button onClick={() => setBarSeries(_barSeries2)}>data2</Button>
        </Space>
      </Card>
    </SideAnchor>
  );
};

export default BarCharts;
