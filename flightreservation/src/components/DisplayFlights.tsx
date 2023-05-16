import React, { useState } from "react";
import { useParams } from "react-router-dom";

function DisplayFlights() {
  const { to, from, departureCity } = useParams();
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let count = 0;

  return (
    <div>
      <h1>Display Flights</h1>
    </div>
  );
}

export default DisplayFlights;
