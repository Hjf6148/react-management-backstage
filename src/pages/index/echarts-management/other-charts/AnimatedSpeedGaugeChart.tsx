import { InputNumber, Space } from "antd";
import { EChartsOption, EChartsType, init } from "echarts";
import { useCallback, useEffect, useRef, useState } from "react";

const AnimatedSpeedGaugeChart = () => {
  const cartRef = useRef(null);
  const myChart = useRef<EChartsType | null>(null);
  const [speed, setSpeed] = useState<number>(0);

  const renderChart = useCallback(() => {
    if (!myChart.current) myChart.current = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "带动画的速度仪表", left: "left" },
      series: [
        {
          type: "gauge",
          progress: { show: true, width: 10 },
          axisLine: { lineStyle: { width: 10 } },
          axisTick: { show: false },
          splitLine: { length: 12, lineStyle: { width: 1, color: "#999" } },
          axisLabel: { distance: 25, color: "#999", fontSize: 16 },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: { borderWidth: 10 },
          },
          title: { show: false },
          detail: {
            valueAnimation: true,
            formatter: "{value} km/h",
            fontSize: 24,
            offsetCenter: [0, "70%"],
          },
          data: [{ value: speed }],
        },
      ],
    };
    myChart.current.setOption(option);
  }, [speed]);

  useEffect(() => {
    renderChart();
  }, [renderChart]);

  return (
    <>
      <div ref={cartRef} className="w-full h-[500px]" />
      <Space>
        <span>速度：</span>
        <InputNumber
          value={speed}
          onChange={(value) => setSpeed(value || 0)}
          min={0}
          max={100}
        />
      </Space>
    </>
  );
};

export default AnimatedSpeedGaugeChart;
