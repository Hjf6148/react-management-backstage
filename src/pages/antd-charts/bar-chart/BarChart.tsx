import { Empty } from "antd";
import { useEffect, useState } from "react";
import { Column, ColumnConfig } from "@ant-design/charts";
import { formatThousand } from "../../../libs/numberFormat";
import { DataItem } from ".";

type DataType = { groupName: string; sourceName: string; value: number };

interface BarChartProps {
  dataSource?: DataItem[];
}
const BarChart = ({ dataSource }: BarChartProps) => {
  const [columnData, setColumnData] = useState<DataType[]>([]);
  useEffect(() => {
    if (!dataSource?.length) {
      setColumnData([]);
      return;
    }
    const _columnData =
      dataSource?.reduce(
        (prev, cur) => [
          ...prev,
          {
            sourceName: cur.sourceName!,
            value: cur.addAmount || 0,
            groupName: "增加",
          },
          {
            sourceName: cur.sourceName!,
            value: cur.subtractAmount || 0,
            groupName: "减少",
          },
        ],
        [] as DataType[]
      ) || [];
    setColumnData(_columnData);
  }, [dataSource]);

  const config: ColumnConfig = {
    data: columnData,
    xField: "sourceName",
    yField: "value",
    seriesField: "groupName",
    isGroup: true,
    label: { layout: [], formatter: (datum) => formatThousand(datum.value) },
    yAxis: { label: { formatter: (v) => formatThousand(v) }, line: {} },
    tooltip: {
      formatter: (datum) => ({
        name: datum.groupName,
        value: formatThousand(datum.value),
      }),
    },
  };

  return columnData.length ? (
    <Column {...config} />
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无实际数据" />
  );
};

export default BarChart;
