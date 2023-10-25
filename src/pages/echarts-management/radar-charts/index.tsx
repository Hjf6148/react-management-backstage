import { Button, Space } from "antd";
import SideAnchor from "../components/SideAnchor";
import { useEffect, useState } from "react";
import RadarChart from "./RadarChart";

const _radarData1 = [
  {
    name: "Allocated Budget",
    value: [4200, 3000, 20000, 35000, 50000, 18000],
  },
  {
    name: "Actual Spending",
    value: [5000, 14000, 28000, 26000, 42000, 21000],
  },
];
const _radarData2 = [
  {
    name: "Allocated Budget",
    value: [1200, 2000, 10000, 15000, 40000, 9000],
  },
  {
    name: "Actual Spending",
    value: [3000, 7000, 13000, 11000, 31000, 11000],
  },
];

const RadarCharts = () => {
  const [radarData, setRadarData] = useState<any[]>();

  useEffect(() => {
    setRadarData(_radarData1);
  }, []);

  return (
    <SideAnchor items={[{ id: "barChart", title: "柱状图" }]}>
      <div id="barChart">
        <RadarChart data={radarData} />
        <Space>
          <Button onClick={() => setRadarData(_radarData1)}>data1</Button>
          <Button onClick={() => setRadarData(_radarData2)}>data2</Button>
        </Space>
      </div>
    </SideAnchor>
  );
};

export default RadarCharts;
