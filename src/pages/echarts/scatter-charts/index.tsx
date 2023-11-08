import { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";
import SideAnchor from "../../../components/SideAnchor";
import ScatterChart from "./ScatterChart";

const _scatterSeries1 = [
  {
    name: "data1",
    symbolSize: 20,
    type: "scatter",
    data: [
      [10.0, 8.04],
      [8.07, 6.95],
      [13.0, 7.58],
      [9.05, 8.81],
      [11.0, 8.33],
      [14.0, 7.66],
      [13.4, 6.81],
      [10.0, 6.33],
      [14.0, 8.96],
      [12.5, 6.82],
      [9.15, 7.2],
    ],
  },
  {
    name: "data2",
    symbolSize: 20,
    type: "scatter",
    data: [
      [11.5, 7.2],
      [3.03, 4.23],
      [12.2, 7.83],
      [2.02, 4.47],
      [1.05, 3.33],
      [4.05, 4.96],
      [6.03, 7.24],
      [12.0, 6.26],
      [12.0, 8.84],
      [7.08, 5.82],
      [5.02, 5.68],
    ],
  },
];
const _scatterSeries2 = [
  {
    name: "data1",
    symbolSize: 20,
    type: "scatter",
    data: [
      [12, 5],
      [4.01, 6.21],
      [11.2, 9.03],
      [2.92, 4.47],
      [-1.95, -4.93],
      [-5.15, -6.06],
      [11.03, -8.24],
      [10.01, -7.26],
      [8.08, -8.84],
      [-7.01, 9.42],
      [-7.02, 5.58],
    ],
  },
  {
    name: "data2",
    symbolSize: 20,
    type: "scatter",
    data: [
      [12.5, 7.2],
      [3.13, 6.23],
      [-10.2, 5.43],
      [-4.02, 3.17],
      [-7.05, -8.33],
      [-6.05, -4.16],
      [5.03, -9.24],
      [10.0, -3.26],
      [11, -8.14],
      [6.18, 9.82],
      [1.02, 9.68],
    ],
  },
];

const ScatterCharts = () => {
  const [scatterSeries, setScatterSeries] = useState<any[]>();

  useEffect(() => {
    setScatterSeries(_scatterSeries1);
  }, []);

  return (
    <SideAnchor items={[{ id: "scatterChart", title: "散点图" }]}>
      <Card id="scatterChart" className="mb-2.5">
        <ScatterChart series={scatterSeries} />
        <Space>
          <Button onClick={() => setScatterSeries(_scatterSeries1)}>
            data1
          </Button>
          <Button onClick={() => setScatterSeries(_scatterSeries2)}>
            data2
          </Button>
        </Space>
      </Card>
    </SideAnchor>
  );
};

export default ScatterCharts;
