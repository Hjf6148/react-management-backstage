import { useEffect, useState } from "react";
import { formatRatio } from "../../../libs/numberFormat";
import { Line, LineConfig } from "@ant-design/charts";
import { Empty } from "antd";
import { DataItem } from ".";

type DataType = { sourceName: string; date: string; value: number };

interface LineChartProps {
  dataSource?: DataItem[];
}
const LineChart = ({ dataSource }: LineChartProps) => {
  const [lineData, setLineData] = useState<DataType[]>([]);
  useEffect(() => {
    if (!dataSource?.length) {
      setLineData([]);
      return;
    }
    const _hasValueList: number[] = [];
    dataSource.forEach((item) => {
      if (item.ratio1) _hasValueList.push(1);
      if (item.ratio2) _hasValueList.push(2);
      if (item.ratio3) _hasValueList.push(3);
      if (item.ratio4) _hasValueList.push(4);
      if (item.ratio5) _hasValueList.push(5);
      if (item.ratio6) _hasValueList.push(6);
      if (item.ratio7) _hasValueList.push(7);
      if (item.ratio8) _hasValueList.push(8);
      if (item.ratio9) _hasValueList.push(9);
      if (item.ratio10) _hasValueList.push(10);
      if (item.ratio11) _hasValueList.push(11);
      if (item.ratio12) _hasValueList.push(12);
    });
    if (!_hasValueList.length) {
      setLineData([]);
      return;
    }
    const _lineData = dataSource.reduce((prev, cur) => {
      const startIndex = Math.min(..._hasValueList);
      const endIndex = Math.max(..._hasValueList);
      const curList: DataType[] = [];
      if (startIndex <= 1 && 1 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.02~2023.01",
          value: cur.ratio1!,
        });
      if (startIndex <= 2 && 2 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.03~2023.02",
          value: cur.ratio2!,
        });
      if (startIndex <= 3 && 3 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.04~2023.03",
          value: cur.ratio3!,
        });
      if (startIndex <= 4 && 4 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.05~2023.04",
          value: cur.ratio4!,
        });
      if (startIndex <= 5 && 5 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.06~2023.05",
          value: cur.ratio5!,
        });
      if (startIndex <= 6 && 6 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.07~2023.06",
          value: cur.ratio6!,
        });
      if (startIndex <= 7 && 7 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.08~2023.07",
          value: cur.ratio7!,
        });
      if (startIndex <= 8 && 8 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.09~2023.08",
          value: cur.ratio8!,
        });
      if (startIndex <= 9 && 9 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.10~2023.09",
          value: cur.ratio9!,
        });
      if (startIndex <= 10 && 10 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.11~2023.10",
          value: cur.ratio10!,
        });
      if (startIndex <= 11 && 11 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2022.12~2023.11",
          value: cur.ratio11!,
        });
      if (startIndex <= 12 && 12 <= endIndex)
        curList.push({
          sourceName: cur.sourceName!,
          date: "2023.01~2023.12",
          value: cur.ratio12!,
        });
      return [...prev, ...curList];
    }, [] as DataType[]);
    setLineData(_lineData);
  }, [dataSource]);

  const config: LineConfig = {
    data: lineData,
    xField: "date",
    yField: "value",
    label: {
      formatter: (datum: any) => formatRatio(datum.value) as string,
    },
    seriesField: "sourceName",
    point: { size: 4, shape: "circle" },
    yAxis: { label: { formatter: (v: any) => formatRatio(v) }, line: {} },
    legend: { marker: () => ({ style: { lineWidth: 5 } }) },
    tooltip: {
      formatter: (datum: any) => ({
        name: datum.sourceName,
        value: formatRatio(datum.value),
      }),
    },
  };

  return lineData.length ? (
    <Line {...config} />
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无实际数据" />
  );
};

export default LineChart;
