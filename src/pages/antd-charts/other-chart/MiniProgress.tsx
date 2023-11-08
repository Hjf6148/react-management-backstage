import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";
import { TypographyTitle } from "../../../containers/SubTitle";
import { decamalFix } from "../../../libs/numberFormat";
import { Progress, ProgressConfig } from "@ant-design/charts";

const formatRatio = (num: number) => decamalFix(num * 100);

interface MiniProgressProps {
  id: string;
}
/** 迷你进度条 */
const MiniProgress = ({ id }: MiniProgressProps) => {
  const [percent, setPercent] = useState<number>(0);

  const config: ProgressConfig = {
    percent: 0,
    height: 50,
    width: 300,
    autoFit: false,
    barWidthRatio: 0.6,
    color: ["#5B8FF9", "#E8EDF3"],
  };

  return (
    <Card id={id} className="mb-2.5">
      <TypographyTitle title="迷你进度条" />
      <Progress {...config} percent={percent} />
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

export default MiniProgress;
