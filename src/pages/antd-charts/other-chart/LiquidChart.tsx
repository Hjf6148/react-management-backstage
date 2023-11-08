import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";
import { Liquid, LiquidConfig } from "@ant-design/charts";
import { decamalFix } from "../../../libs/numberFormat";
import { TypographyTitle } from "../../../containers/SubTitle";

const formatRatio = (num: number) => decamalFix(num * 100);

interface LiquidChartProps {
  id: string;
}
/** 水波图 */
const LiquidChart = ({ id }: LiquidChartProps) => {
  const [percent, setPercent] = useState<number>(0);

  const config: LiquidConfig = {
    percent: 0,
    outline: { border: 4, distance: 8 },
    wave: { length: 128 },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="水波图" />
      <Liquid {...config} percent={percent} />
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

export default LiquidChart;
