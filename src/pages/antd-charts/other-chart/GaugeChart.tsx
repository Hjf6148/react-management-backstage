import { Gauge, GaugeConfig } from "@ant-design/charts";
import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";
import { TypographyTitle } from "../../../containers/SubTitle";
import { decamalFix } from "../../../libs/numberFormat";

const formatRatio = (num: number) => decamalFix(num * 100);

interface GaugeChartProps {
  id: string;
}
/** 仪表盘 */
const GaugeChart = ({ id }: GaugeChartProps) => {
  const [percent, setPercent] = useState<number>(0);

  const config: GaugeConfig = {
    percent: 0,
    radius: 0.75,
    range: { color: "#30BF78", width: 12 },
    indicator: {
      pointer: { style: { stroke: "#D0D0D0" } },
      pin: { style: { stroke: "#D0D0D0" } },
    },
    axis: {
      label: { formatter: (v) => formatRatio(Number(v)) },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: (datum) => `Rate: ${formatRatio(datum?.percent)}%`,
        style: { color: "rgba(0,0,0,0.65)", fontSize: "24px" },
      },
    },
    gaugeStyle: { lineCap: "round" },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="仪表盘" />
      <Gauge {...config} percent={percent} />
      <Space>
        <span>请输入：</span>
        <InputNumber
          min={0}
          max={100}
          value={formatRatio(percent)}
          onChange={(value) => setPercent(value ? value / 100 : 0)}
          style={{ width: 120 }}
          addonAfter="%"
        />
        <Button type="link" onClick={() => setPercent(0)}>
          清除
        </Button>
      </Space>
    </Card>
  );
};

export default GaugeChart;
