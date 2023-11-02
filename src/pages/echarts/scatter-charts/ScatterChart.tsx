import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface ScatterChartProps {
  series?: any[];
}
const ScatterChart = ({ series }: ScatterChartProps) => {
  const cartRef = useRef(null);

  const renderChart = useCallback((series?: any[]) => {
    if (!series) return;
    if (cartRef.current) dispose(cartRef.current);
    const myCharts = init(cartRef.current);
    const options: EChartsOption = {
      title: { text: "散点图" },
      tooltip: { trigger: "axis" },
      legend: {
        left: "right",
        orient: "vertical",
        data: [
          { name: "data1", icon: "roundRect" },
          { name: "data2", icon: "roundRect" },
        ],
      },
      grid: { left: "6%", right: "8%", bottom: "6%", containLabel: true },
      xAxis: {},
      yAxis: {},
      series: series,
    };
    myCharts.setOption(options);
  }, []);

  useEffect(() => {
    renderChart(series);
  }, [series, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default ScatterChart;
