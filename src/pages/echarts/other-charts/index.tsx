import { Button, Divider, FloatButton, Space } from "antd";
import SideAnchor from "../components/SideAnchor";
import { useEffect, useState } from "react";
import SunburstChart from "./Sunburst";
import ClockChart from "./ClockChart";
import AnimatedSpeedGaugeChart from "./AnimatedSpeedGaugeChart";
import CandlestickChart from "./CandlestickChart";
import BoxplotChart from "./BoxplotChart";

const _sunburstData1 = [
  {
    name: "Grandpa",
    children: [
      {
        name: "Uncle Leo",
        value: 15,
        children: [
          {
            name: "Cousin Jack",
            value: 2,
          },
          {
            name: "Cousin Mary",
            value: 5,
            children: [
              {
                name: "Jackson",
                value: 2,
              },
            ],
          },
          {
            name: "Cousin Ben",
            value: 4,
          },
        ],
      },
      {
        name: "Father",
        value: 10,
        children: [
          {
            name: "Me",
            value: 5,
          },
          {
            name: "Brother Peter",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Nancy",
    children: [
      {
        name: "Uncle Nike",
        children: [
          {
            name: "Cousin Betty",
            value: 1,
          },
          {
            name: "Cousin Jenny",
            value: 2,
          },
        ],
      },
    ],
  },
];
const _sunburstData2 = [
  {
    name: "Grandpa",
    children: [
      {
        name: "Uncle Leo",
        value: 10,
        children: [
          {
            name: "Cousin Jack",
            value: 1,
          },
          {
            name: "Cousin Mary",
            value: 3,
            children: [
              {
                name: "Jackson",
                value: 2,
              },
            ],
          },
          {
            name: "Cousin Ben",
            value: 4,
          },
        ],
      },
      {
        name: "Father",
        value: 10,
        children: [
          {
            name: "Me",
            value: 3,
          },
          {
            name: "Brother Peter",
            value: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Nancy",
    children: [
      {
        name: "Uncle Nike",
        children: [
          {
            name: "Cousin Betty",
            value: 4,
          },
          {
            name: "Cousin Jenny",
            value: 6,
          },
        ],
      },
    ],
  },
];
const _candlestickData1 = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
];
const _candlestickData2 = [
  [10, 2, -12, 26],
  [9, 1, -4, 24],
  [-1, 19, -11, 16],
  [12, 15, 5, 32],
];

const OtherCharts = () => {
  const [pieData, setPieData] = useState<any[]>();
  const [candlestickData, setCandlestickData] = useState<any[]>();

  useEffect(() => {
    setPieData(_sunburstData1);
    setCandlestickData(_candlestickData1);
  }, []);

  return (
    <SideAnchor
      items={[
        { id: "sunburstChart", title: "旭日图" },
        { id: "clockChart", title: "时钟仪表盘" },
        { id: "animatedSpeedGaugeChart", title: "动画速度仪表" },
        { id: "candlestickChart", title: "K线图" },
        { id: "boxplotChart", title: "盒须图" },
      ]}
    >
      <div id="sunburstChart">
        <SunburstChart data={pieData} />
        <Space>
          <Button onClick={() => setPieData(_sunburstData1)}>data1</Button>
          <Button onClick={() => setPieData(_sunburstData2)}>data2</Button>
        </Space>
      </div>

      <Divider />

      <div id="clockChart">
        <ClockChart />
      </div>

      <Divider />

      <div id="animatedSpeedGaugeChart">
        <AnimatedSpeedGaugeChart />
      </div>

      <Divider />

      <div id="candlestickChart">
        <CandlestickChart data={candlestickData} />
        <Space>
          <Button onClick={() => setCandlestickData(_candlestickData1)}>
            data1
          </Button>
          <Button onClick={() => setCandlestickData(_candlestickData2)}>
            data2
          </Button>
        </Space>
      </div>

      <Divider />

      <div id="boxplotChart">
        <BoxplotChart />
      </div>

      <FloatButton.BackTop visibilityHeight={52} />
    </SideAnchor>
  );
};

export default OtherCharts;
