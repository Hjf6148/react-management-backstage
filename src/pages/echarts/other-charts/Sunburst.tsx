import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface SunburstChartProps {
  data?: any[];
}
const SunburstChart = ({ data }: SunburstChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "旭日图", left: "left" },
      tooltip: { trigger: "item" },
      series: {
        type: "sunburst",
        data: data,
        radius: [0, "90%"],
        label: { rotate: "radial" },
      },
    };
    myChart.setOption(option);
  }, []);

  useEffect(() => {
    renderChart(data);
  }, [data, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default SunburstChart;
