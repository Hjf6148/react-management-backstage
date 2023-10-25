import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface NightingaleChartProps {
  data?: any[];
}
const NightingaleChart = ({ data }: NightingaleChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "南丁格尔玫瑰图", subtext: "Nightingale Chart" },
      tooltip: { trigger: "item" },
      legend: { top: "bottom" },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [30, 150],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: { borderRadius: 8 },
          data: data,
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  useEffect(() => {
    renderChart(data);
  }, [data, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default NightingaleChart;
