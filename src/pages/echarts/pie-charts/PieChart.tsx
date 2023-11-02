import { useCallback, useEffect, useRef } from "react";
import { EChartsOption, dispose, init } from "echarts";

interface PieChartProps {
  data?: any[];
}
const PieChart = ({ data }: PieChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: {
        text: "饼状图",
        subtext: "某站点用户Access From",
        left: "center",
      },
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", left: "left" },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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

export default PieChart;
