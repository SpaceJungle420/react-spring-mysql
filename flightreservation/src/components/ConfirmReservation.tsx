import React from "react";
import { useParams } from "react-router-dom";

function ConfirmReservation() {
  const { reservationId } = useParams();

  return (
    <div>
      <h1>Confirm Reservation</h1>
      <b>
        Flight Reservation is complete. The confirmartion code is{" "}
        {reservationId}
      </b>
    </div>
  );
}

export default ConfirmReservation;
