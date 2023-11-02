import { useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";

interface AreaChartProps {
  series?: any[];
}
const AreaChart = ({ series }: AreaChartProps) => {
  const cartRef = useRef(null);

  const renderChart = useCallback((series?: any[]) => {
    if (!series) return;
    if (cartRef.current) echarts.dispose(cartRef.current);
    const myCharts = echarts.init(cartRef.current);
    const options: echarts.EChartsOption = {
      title: { text: "面积图" },
      tooltip: { trigger: "axis" },
      legend: {
        data: [
          { name: "amount1", icon: "rect" },
          { name: "amount2", icon: "rect" },
        ],
      },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value", axisLine: { show: true } },
      series: series,
    };
    myCharts.setOption(options);
  }, []);

  useEffect(() => {
    renderChart(series);
  }, [series, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default AreaChart;
