import { Button, Card, Space } from "antd";
import TableList from "./TableList";
import LineChart from "./lineChart";
import { useEffect, useState } from "react";
import SubTitle from "../../../containers/SubTitle";

export type DataItem = {
  id?: number;
  sourceName?: string;
  ratio1?: number;
  ratio2?: number;
  ratio3?: number;
  ratio4?: number;
  ratio5?: number;
  ratio6?: number;
  ratio7?: number;
  ratio8?: number;
  ratio9?: number;
  ratio10?: number;
  ratio11?: number;
  ratio12?: number;
};

const initData: DataItem[] = [
  {
    id: 1,
    sourceName: "来源1",
    ratio1: 0,
    ratio2: 0.01,
    ratio3: 0.02,
    ratio4: 0.06,
    ratio5: 0.09,
    ratio6: 0.1,
    ratio7: 0.14,
    ratio8: 0.164,
    ratio9: 0.21,
    ratio10: 0,
    ratio11: 0,
    ratio12: 0,
  },
  {
    id: 2,
    sourceName: "来源2",
    ratio1: 0,
    ratio2: 0.16,
    ratio3: 0.31,
    ratio4: 0.28,
    ratio5: 0.35,
    ratio6: 0.36,
    ratio7: 0.19,
    ratio8: 0.37,
    ratio9: 0.41,
    ratio10: 0,
    ratio11: 0,
    ratio12: 0,
  },

  {
    id: 3,
    sourceName: "来源3",
    ratio1: 0,
    ratio2: 0.34,
    ratio3: 0.21,
    ratio4: 0.11,
    ratio5: 0.05,
    ratio6: 0.09,
    ratio7: 0.26,
    ratio8: 0.37,
    ratio9: 0.51,
    ratio10: 0,
    ratio11: 0,
    ratio12: 0,
  },
];

const AntdLineChart = () => {
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

      <SubTitle>折线图：</SubTitle>
      <Card bodyStyle={{ padding: 16 }}>
        <LineChart dataSource={dataSource} />
      </Card>
    </div>
  );
};

export default AntdLineChart;
