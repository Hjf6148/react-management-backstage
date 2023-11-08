import { EChartsOption, dispose, init } from "echarts";
import { useCallback, useEffect, useRef } from "react";

export type NestedPiesDataType = { data1: any[]; data2: any[] };
interface NestedPiesChartProps {
  data?: NestedPiesDataType;
}
const NestedPiesChart = ({ data }: NestedPiesChartProps) => {
  const cartRef = useRef(null);
  const renderChart = useCallback((data?: NestedPiesDataType) => {
    if (!data) return;
    if (cartRef.current) dispose(cartRef.current);
    const myChart = init(cartRef.current);
    const option: EChartsOption = {
      title: { text: "环形图", subtext: "NestedPies Chart" },
      tooltip: { trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
      legend: {
        left: "center",
        top: "bottom",
        data: [
          "Direct",
          "Marketing",
          "Search Engine",
          "Email",
          "Union Ads",
          "Video Ads",
          "Baidu",
          "Google",
          "Bing",
          "Others",
        ],
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          selectedMode: "single",
          radius: [0, "20%"],
          label: { position: "inner", fontSize: 14 },
          labelLine: { show: false },
          data: data.data1,
        },
        {
          name: "Access From",
          type: "pie",
          radius: ["35%", "50%"],
          labelLine: { length: 30 },
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: { color: "#6E7079", lineHeight: 22, align: "center" },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 22,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: data.data2,
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

export default NestedPiesChart;
