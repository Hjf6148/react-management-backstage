import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import TableList from "./TableList";
import BarChart from "./BarChart";
import SubTitle from "../../../containers/SubTitle";

export type DataItem = {
  id?: number;
  sourceName?: string;
  addAmount?: number;
  subtractAmount?: number;
  totalAmount?: number;
  ratio?: number;
};

const initData: DataItem[] = [
  {
    id: 1,
    sourceName: "来源1",
    addAmount: 11000,
    subtractAmount: -9000,
    totalAmount: 2000,
    ratio: 0.4,
  },
  {
    id: 2,
    sourceName: "来源2",
    addAmount: 8000,
    subtractAmount: -7000,
    totalAmount: 1000,
    ratio: 0.2,
  },
  {
    id: 3,
    sourceName: "来源3",
    addAmount: 4000,
    subtractAmount: -2000,
    totalAmount: 2000,
    ratio: 0.4,
  },
];

const AntdBarChart = () => {
  const [dataSource, setDataSource] = useState<DataItem[]>();

  useEffect(() => {
    setDataSource(initData);
  }, []);

  return (
    <div>
      <Card>
        <Space className="mb-2.5">
          <Button onClick={() => setDataSource(initData)}>展示全部</Button>
          <Button onClick={() => setDataSource([initData[0]])}>
            仅展示第一条
          </Button>
        </Space>
        <TableList dataSource={dataSource} />
      </Card>

      <SubTitle>柱状图：</SubTitle>
      <Card bodyStyle={{ padding: 16 }}>
        <BarChart dataSource={dataSource} />
      </Card>
    </div>
  );
};

export default AntdBarChart;
