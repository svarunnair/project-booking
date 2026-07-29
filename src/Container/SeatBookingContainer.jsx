import { Card, Row, Col, Typography } from "antd";
import { seats } from  '../data/seat.js';
import SeatRow from "../components/SeatRow";
import Screen from "../components/Screens.jsx";
import Legend from "../components/Legend";

const { Title } = Typography;

export default function SeatBookingContainer() {



  const seatLayout = [
    {
      row: "A",
      seats: Array.from({ length: 12 }, (_, i) => ({
        id: `A${i + 1}`,
        number: i + 1,
        status: "available", // available | booked | selected
      })),
    },
    {
      row: "B",
      seats: Array.from({ length: 12 }, (_, i) => ({
        id: `B${i + 1}`,
        number: i + 1,
        status: i === 3 || i === 8 ? "booked" : "available",
      })),
    },
    {
      row: "C",
      seats: Array.from({ length: 12 }, (_, i) => ({
        id: `C${i + 1}`,
        number: i + 1,
        status: i === 5 ? "selected" : "available",
      })),
    },
    {
      row: "D",
      seats: Array.from({ length: 12 }, (_, i) => ({
        id: `D${i + 1}`,
        number: i + 1,
        status: "available",
      })),
    },
  ];
  
  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={16}>
        <Card>
          <Title level={3}>Avengers Endgame</Title>

          <Screen />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #b42b2b",
              padding: 16,
              borderRadius: 8,
              marginTop: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {seatLayout.map((row) => (
              <div
                key={row.row}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                {/* Row Label */}
                <div
                  style={{
                    width: 30,
                    fontWeight: "bold",
                  }}
                >
                  {row.row}
                </div>

                {/* Seats */}
                <div style={{ display: "flex", gap: 8 }}>
                  {row.seats.map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => alert(`Seat ${seat.id}`)}
                      style={{
                        width: 25,
                        height: 25,
                        border: "1px solid #b42b2b",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        backgroundColor:
                          seat.status === "booked"
                            ? "#d9d9d9"
                            : seat.status === "selected"
                              ? "#52c41a"
                              : "#fff",
                        cursor:
                          seat.status === "booked" ? "not-allowed" : "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* {seats.map((row) => (
            <SeatRow key={row.row} row={row} />
          ))} */}

          <Legend />
        </Card>
      </Col>
    </Row>
  );
}
