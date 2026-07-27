import { Button } from "antd";

export default function Seat({ seat }) {
  return (
    <Button
      size="small"
      disabled={seat.booked}
      type={seat.booked ? "default" : "primary"}
    >
      {seat.id}
    </Button>
  );
}
