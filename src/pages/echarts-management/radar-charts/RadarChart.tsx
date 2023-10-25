import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface RadarChartProps {
  data?: any[];
}
const RadarChart = ({ data }: RadarChartProps) => {
  const cartRef = useRef(null);

  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myCharts = init(cartRef.current);
    const options: EChartsOption = {
      title: { text: "雷达图" },
      tooltip: { trigger: "axis" },
      legend: {
        left: "right",
        orient: "vertical",
        data: [
          { name: "Allocated Budget", icon: "circle" },
          { name: "Actual Spending", icon: "circle" },
        ],
      },
      grid: { left: "6%", right: "8%", bottom: "6%", containLabel: true },
      radar: {
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "Information Technology", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: data,
        },
      ],
    };
    myCharts.setOption(options);
  }, []);

  useEffect(() => {
    renderChart(data);
  }, [data, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default RadarChart;
