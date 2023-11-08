import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { Pie, PieConfig } from "@ant-design/charts";
import { formatAmount } from "../../../libs/numberFormat";
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

interface DonutChartProps {
  id: string;
}
/** 环形图 */
const DonutChart = ({ id }: DonutChartProps) => {
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
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      autoRotate: false,
      style: { textAlign: "center", fontSize: 14 },
    },
    interactions: [
      { type: "element-selected" },
      { type: "element-active" },
      { type: "pie-statistic-active" },
    ],
    statistic: {
      title: {
        offsetY: -4,
        formatter: (datum) => (datum ? datum.type : "总计"),
        // customHtml: (_container, _view, datum) => {
        //   const titleText = datum ? datum.type : "总计";
        //   return `<div>${titleText}</div>`;
        // },
      },
      content: {
        offsetY: 4,
        style: { fontSize: "32px" },
        formatter: (datum, data) => {
          const value = datum
            ? datum.value
            : data?.reduce((prev, cur) => prev + cur.value, 0) || 0;
          return formatAmount(value) as string;
        },
        // customHtml: (_container, _view, datum, data) => {
        //   const value = datum
        //     ? datum.value
        //     : data?.reduce((prev, cur) => prev + cur.value, 0) || 0;
        //   return (formatAmount(value) || "") as string;
        // },
      },
    },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="环形图" />
      <Pie {...config} />
      <Space>
        <Button onClick={() => setPieData(data1)}>data1</Button>
        <Button onClick={() => setPieData(data2)}>data2</Button>
      </Space>
    </Card>
  );
};

export default DonutChart;
