import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { Pie, PieConfig } from "@ant-design/charts";
import { TypographyTitle } from "../../../containers/SubTitle";

type DataType = { type: string; value: number };

const data1: DataType[] = [
  { type: "分类一", value: 27 },
  { type: "分类二", value: 25 },
  { type: "分类三", value: 18 },
  { type: "分类四", value: 15 },
  { type: "分类五", value: 10 },
  { type: "其他", value: 5 },
];
const data2: DataType[] = [
  { type: "周一", value: 120 },
  { type: "周二", value: 119 },
  { type: "周三", value: 110 },
  { type: "周四", value: 210 },
  { type: "周五", value: 230 },
  { type: "周六", value: 159 },
  { type: "周日", value: 213 },
];

interface PieQuarterRoundProps {
  id: string;
}
/** 四分之一圆 */
const PieQuarterRound = ({ id }: PieQuarterRoundProps) => {
  const [pieData, setPieData] = useState<DataType[]>([]);

  useEffect(() => {
    setPieData(data1);
  }, []);

  const config: PieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    // 设置圆弧起始角度
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: "inner",
      offset: "-8%",
      content: "{name}",
      style: { fontSize: 18 },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    pieStyle: { lineWidth: 0 },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="四分之一圆" />
      <Pie {...config} />
      <Space>
        <Button onClick={() => setPieData(data1)}>data1</Button>
        <Button onClick={() => setPieData(data2)}>data2</Button>
      </Space>
    </Card>
  );
};

export default PieQuarterRound;
