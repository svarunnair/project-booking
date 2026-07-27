import { Row, Col } from "antd";
import Seat from "./Seat";

export default function SeatRow({ row }) {
  return (
    <Row gutter={8} align="middle" style={{ marginBottom: 12 }}>
      <Col span={2}>
        <b>{row.row}</b>
      </Col>

      <Col span={22}>
        <Row gutter={[8, 8]}>
          {row.seats.map((seat) => (
            <Seat key={seat.id} seat={seat} />
          ))}
        </Row>
      </Col>
    </Row>
  );
}
