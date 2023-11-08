import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { G2, Pie, PieConfig } from "@ant-design/charts";
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

interface PieSpiderProps {
  id: string;
}
/** 饼图-蜘蛛布局 */
const PieSpider = ({ id }: PieSpiderProps) => {
  const [pieData, setPieData] = useState<DataType[]>([]);
  const G = G2.getEngine("canvas");

  useEffect(() => {
    setPieData(data1);
  }, []);

  const config: PieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      //   content: "{name}\n{percentage}",
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: { x: 10, y: 8, text: data.type, fill: mappingData.color },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}个 ${parseInt(
              String(data.percent * 100)
            ).toFixed(2)}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 600,
          },
        });
        return group;
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="饼图-蜘蛛布局" />
      <Pie {...config} />
      <Space>
        <Button onClick={() => setPieData(data1)}>data1</Button>
        <Button onClick={() => setPieData(data2)}>data2</Button>
      </Space>
    </Card>
  );
};

export default PieSpider;
