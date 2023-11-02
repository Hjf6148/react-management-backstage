import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface DoughnutChartProps {
  data?: any[];
}
const DoughnutChart = ({ data }: DoughnutChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "环形图", subtext: "Doughnut Chart" },
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", left: "right", top: "center" },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: { show: false, position: "center" },
          emphasis: { label: { show: true, fontSize: 40, fontWeight: "bold" } },
          labelLine: { show: false },
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

export default DoughnutChart;
