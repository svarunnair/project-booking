import { Divider, Typography } from "antd";

export default function Screen() {
  return (
    <>
      <Divider />
      <Typography.Title level={5} style={{ textAlign: "center" }}>
        SCREEN THIS WAY
      </Typography.Title>
      <Divider />
    </>
  );
}
