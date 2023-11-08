import { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";
import PieChart from "./PieChart";
import NestedPiesChart, { NestedPiesDataType } from "./NestedPiesChart";
import DoughnutChart from "./DoughnutChart";
import NightingaleChart from "./NightingaleChart";
import SideAnchor from "../../../components/SideAnchor";

const _pieData1 = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];
const _pieData2 = [
  { value: 148, name: "Search Engine" },
  { value: 435, name: "Direct" },
  { value: 280, name: "Email" },
  { value: 424, name: "Union Ads" },
  { value: 318, name: "Video Ads" },
];
const _doughnutData1 = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];
const _doughnutData2 = [
  { value: 50, name: "Search Engine" },
  { value: 435, name: "Direct" },
  { value: 380, name: "Email" },
  { value: 384, name: "Union Ads" },
  { value: 310, name: "Video Ads" },
];
const _nightingaleData1 = [
  { value: 40, name: "rose 1" },
  { value: 38, name: "rose 2" },
  { value: 32, name: "rose 3" },
  { value: 30, name: "rose 4" },
  { value: 28, name: "rose 5" },
  { value: 26, name: "rose 6" },
  { value: 22, name: "rose 7" },
  { value: 18, name: "rose 8" },
];
const _nightingaleData2 = [
  { value: 4, name: "rose 1" },
  { value: 18, name: "rose 2" },
  { value: 22, name: "rose 3" },
  { value: 30, name: "rose 4" },
  { value: 48, name: "rose 5" },
  { value: 56, name: "rose 6" },
  { value: 62, name: "rose 7" },
  { value: 78, name: "rose 8" },
];
const _nestedPiesData1 = {
  data1: [
    { value: 1548, name: "Search Engine" },
    { value: 775, name: "Direct" },
    { value: 679, name: "Marketing", selected: true },
  ],
  data2: [
    { value: 1048, name: "Baidu" },
    { value: 335, name: "Direct" },
    { value: 310, name: "Email" },
    { value: 251, name: "Google" },
    { value: 234, name: "Union Ads" },
    { value: 147, name: "Bing" },
    { value: 135, name: "Video Ads" },
    { value: 102, name: "Others" },
  ],
};
const _nestedPiesData2 = {
  data1: [
    { value: 432, name: "Search Engine" },
    { value: 124, name: "Direct" },
    { value: 255, name: "Marketing", selected: true },
  ],
  data2: [
    { value: 677, name: "Baidu" },
    { value: 142, name: "Direct" },
    { value: 109, name: "Email" },
    { value: 198, name: "Google" },
    { value: 211, name: "Union Ads" },
    { value: 137, name: "Bing" },
    { value: 186, name: "Video Ads" },
    { value: 513, name: "Others" },
  ],
};

const PieCharts = () => {
  const [pieData, setPieData] = useState<any[]>();
  const [doughnutData, setDoughnutData] = useState<any[]>();
  const [nightingaleData, setNightingaleData] = useState<any[]>();
  const [nestedPiesData, setNestedPiesData] = useState<NestedPiesDataType>();

  useEffect(() => {
    setPieData(_pieData1);
    setDoughnutData(_doughnutData1);
    setNightingaleData(_nightingaleData1);
    setNestedPiesData(_nestedPiesData1);
  }, []);

  return (
    <SideAnchor
      items={[
        { id: "pieChart", title: "饼状图" },
        { id: "doughnutChart", title: "环形图" },
        { id: "nightingaleChart", title: "南丁格尔玫瑰图" },
        { id: "nestedPiesChart", title: "嵌套环形图" },
      ]}
    >
      <Card id="pieChart" className="mb-2.5">
        <PieChart data={pieData} />
        <Space>
          <Button onClick={() => setPieData(_pieData1)}>data1</Button>
          <Button onClick={() => setPieData(_pieData2)}>data2</Button>
        </Space>
      </Card>

      <Card id="doughnutChart" className="mb-2.5">
        <DoughnutChart data={doughnutData} />
        <Space>
          <Button onClick={() => setDoughnutData(_doughnutData1)}>data1</Button>
          <Button onClick={() => setDoughnutData(_doughnutData2)}>data2</Button>
        </Space>
      </Card>

      <Card id="nightingaleChart" className="mb-2.5">
        <NightingaleChart data={nightingaleData} />
        <Space>
          <Button onClick={() => setNightingaleData(_nightingaleData1)}>
            data1
          </Button>
          <Button onClick={() => setNightingaleData(_nightingaleData2)}>
            data2
          </Button>
        </Space>
      </Card>

      <Card id="nestedPiesChart" className="mb-2.5">
        <NestedPiesChart data={nestedPiesData} />
        <Space>
          <Button onClick={() => setNestedPiesData(_nestedPiesData1)}>
            data1
          </Button>
          <Button onClick={() => setNestedPiesData(_nestedPiesData2)}>
            data2
          </Button>
        </Space>
      </Card>
    </SideAnchor>
  );
};

export default PieCharts;
