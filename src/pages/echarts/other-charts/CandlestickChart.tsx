import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

interface CandlestickChartProps {
  data?: any[];
}
const CandlestickChart = ({ data }: CandlestickChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: any[]) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "K线图", left: "left" },
      tooltip: { trigger: "item" },
      xAxis: { data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"] },
      yAxis: {},
      series: [{ type: "candlestick", data: data }],
    };
    myChart.setOption(option);
  }, []);

  useEffect(() => {
    renderChart(data);
  }, [data, renderChart]);

  return <div ref={cartRef} className="w-full h-[500px]" />;
};

export default CandlestickChart;
