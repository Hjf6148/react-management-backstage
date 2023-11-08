import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";
import { TypographyTitle } from "../../../containers/SubTitle";
import { decamalFix } from "../../../libs/numberFormat";
import { RingProgress, RingProgressConfig } from "@ant-design/charts";

const formatRatio = (num: number) => decamalFix(num * 100);

interface MiniRingProgressProps {
  id: string;
}
/** 迷你进度环图 */
const MiniRingProgress = ({ id }: MiniRingProgressProps) => {
  const [percent, setPercent] = useState<number>(0);

  const config: RingProgressConfig = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0,
    color: ["#F4664A", "#E8EDF3"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: { color: "#363636", fontSize: "12px", lineHeight: "14px" },
        formatter: () => "进度",
      },
    },
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="迷你进度环图" />
      <RingProgress {...config} percent={percent} />
      <Space className="mt-2.5">
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

export default MiniRingProgress;
