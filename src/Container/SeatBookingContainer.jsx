import { Card, Row, Col, Typography } from "antd";
import { seats } from  '../data/seat.js';
import SeatRow from "../components/SeatRow";
import Screen from "../components/Screens.jsx";
import Legend from "../components/Legend";

const { Title } = Typography;

export default function SeatBookingContainer() {
  console.log(' ')
  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={16}>
        <Card>
          <Title level={3}>Avengers Endgame</Title>

          <Screen />

          {seats.map((row) => (
            <SeatRow key={row.row} row={row} />
          ))}

          <Legend />
        </Card>
      </Col>
    </Row>
  );
}
