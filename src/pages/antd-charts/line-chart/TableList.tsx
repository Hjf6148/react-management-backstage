import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataItem } from ".";
import StaticText from "../../../components/StaticText";
import { formatRatio } from "../../../libs/numberFormat";

interface TableListProps {
  dataSource?: DataItem[];
}
const TableList = ({ dataSource }: TableListProps) => {
  const columns: ColumnsType<DataItem> = [
    {
      title: "序号",
      key: "index",
      fixed: "left",
      render(_, __, index) {
        return <StaticText value={index + 1} />;
      },
    },
    {
      title: "来源",
      dataIndex: "sourceName",
      render(value) {
        return <StaticText value={value} />;
      },
    },
    {
      title: "2022.02~2023.01",
      dataIndex: "ratio1",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.03~2023.02",
      dataIndex: "ratio2",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.04~2023.03",
      dataIndex: "ratio3",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.05~2023.04",
      dataIndex: "ratio4",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.06~2023.05",
      dataIndex: "ratio5",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.07~2023.06",
      dataIndex: "ratio6",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.08~2023.07",
      dataIndex: "ratio7",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.09~2023.08",
      dataIndex: "ratio8",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.10~2023.09",
      dataIndex: "ratio9",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.11~2023.10",
      dataIndex: "ratio10",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2022.12~2023.11",
      dataIndex: "ratio11",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
    {
      title: "2023.01~2023.12",
      dataIndex: "ratio12",
      render(value) {
        return <StaticText value={formatRatio(value)} />;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: "max-content" }}
      rowKey="id"
    />
  );
};

export default TableList;
