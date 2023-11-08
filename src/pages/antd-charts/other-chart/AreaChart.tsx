import { Area } from "@ant-design/charts";
import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { TypographyTitle } from "../../../containers/SubTitle";

type DataType = { date: string; value: number; type: string };

const data1: DataType[] = [
  { date: "2023-01", value: 1000, type: "项目1" },
  { date: "2023-02", value: 1200, type: "项目1" },
  { date: "2023-03", value: 1100, type: "项目1" },
  { date: "2023-04", value: 1400, type: "项目1" },
  { date: "2023-05", value: 1500, type: "项目1" },
  { date: "2023-06", value: 1700, type: "项目1" },
  { date: "2023-07", value: 1330, type: "项目1" },
  { date: "2023-08", value: 1290, type: "项目1" },
  { date: "2023-09", value: 1090, type: "项目1" },
  { date: "2023-10", value: 1150, type: "项目1" },
  { date: "2023-11", value: 1370, type: "项目1" },
  { date: "2023-12", value: 1470, type: "项目1" },
  { date: "2023-01", value: 2000, type: "项目2" },
  { date: "2023-02", value: 2200, type: "项目2" },
  { date: "2023-03", value: 2100, type: "项目2" },
  { date: "2023-04", value: 2400, type: "项目2" },
  { date: "2023-05", value: 2500, type: "项目2" },
  { date: "2023-06", value: 2700, type: "项目2" },
  { date: "2023-07", value: 2330, type: "项目2" },
  { date: "2023-08", value: 2290, type: "项目2" },
  { date: "2023-09", value: 2090, type: "项目2" },
  { date: "2023-10", value: 2150, type: "项目2" },
  { date: "2023-11", value: 2370, type: "项目2" },
  { date: "2023-12", value: 2470, type: "项目2" },
];
const data2: DataType[] = [
  { date: "2023-01", value: 3200, type: "项目1" },
  { date: "2023-02", value: 2200, type: "项目1" },
  { date: "2023-03", value: 3100, type: "项目1" },
  { date: "2023-04", value: 3400, type: "项目1" },
  { date: "2023-05", value: 3500, type: "项目1" },
  { date: "2023-06", value: 3700, type: "项目1" },
  { date: "2023-07", value: 2330, type: "项目1" },
  { date: "2023-08", value: 2290, type: "项目1" },
  { date: "2023-09", value: 2090, type: "项目1" },
  { date: "2023-10", value: 3150, type: "项目1" },
  { date: "2023-11", value: 2370, type: "项目1" },
  { date: "2023-12", value: 3470, type: "项目1" },
  { date: "2023-01", value: 4200, type: "项目2" },
  { date: "2023-02", value: 3200, type: "项目2" },
  { date: "2023-03", value: 2100, type: "项目2" },
  { date: "2023-04", value: 2400, type: "项目2" },
  { date: "2023-05", value: 1500, type: "项目2" },
  { date: "2023-06", value: 1700, type: "项目2" },
  { date: "2023-07", value: 1330, type: "项目2" },
  { date: "2023-08", value: 1290, type: "项目2" },
  { date: "2023-09", value: 2100, type: "项目2" },
  { date: "2023-10", value: 2150, type: "项目2" },
  { date: "2023-11", value: 1970, type: "项目2" },
  { date: "2023-12", value: 2470, type: "项目2" },
];

interface AreaChartProps {
  id: string;
}
/** 堆叠面积图 */
const AreaChart = ({ id }: AreaChartProps) => {
  const [areaData, setAreaData] = useState<DataType[]>([]);

  useEffect(() => {
    setAreaData(data1);
  }, []);

  const config = {
    data: areaData,
    xField: "date",
    yField: "value",
    seriesField: "type",
    areaStyle: { fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff" },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="堆叠面积图" />
      <Area {...config} />
      <Space className="mt-2.5">
        <Button onClick={() => setAreaData(data1)}>data1</Button>
        <Button onClick={() => setAreaData(data2)}>data2</Button>
      </Space>
    </Card>
  );
};

export default AreaChart;
