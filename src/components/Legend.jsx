import { Space, Tag } from "antd";

export default function Legend() {
  return (
    <Space
      style={{
        marginTop: 30,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Tag color="green">Available</Tag>

      <Tag color="red">Booked</Tag>

      <Tag color="blue">Selected</Tag>
    </Space>
  );
}
