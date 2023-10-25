import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface BarChartProps {
  series?: any[];
}
const BarChart = ({ series }: BarChartProps) => {
  const cartRef = useRef(null);

  const renderChart = useCallback((series?: any[]) => {
    if (!series) return;
    if (cartRef.current) dispose(cartRef.current);
    const myCharts = init(cartRef.current);
    const options: EChartsOption = {
      title: { text: "柱状图" },
      tooltip: { trigger: "axis" },
      legend: {
        left: "right",
        data: [
          { name: "amount1", icon: "rect" },
          { name: "amount2", icon: "rect" },
        ],
      },
      grid: { left: "6%", right: "8%", bottom: "6%", containLabel: true },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value" },
      series: series,
    };
    myCharts.setOption(options);
  }, []);

  useEffect(() => {
    renderChart(series);
  }, [series, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default BarChart;
