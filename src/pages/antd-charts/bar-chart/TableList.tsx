import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataItem } from ".";
import StaticText from "../../../components/StaticText";
import { formatAmount, formatRatio } from "../../../libs/numberFormat";

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
      title: "增加",
      dataIndex: "addAmount",
      render(value) {
        return <StaticText value={formatAmount(value)} />;
      },
    },
    {
      title: "减少",
      dataIndex: "subtractAmount",
      render(value) {
        return <StaticText value={formatAmount(value)} />;
      },
    },
    {
      title: "变化量合计",
      dataIndex: "totalAmount",
      render(value) {
        return <StaticText value={formatAmount(value)} />;
      },
    },
    {
      title: "变化量占比",
      dataIndex: "ratio",
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
