import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DisplayFlights() {
  const { to, from, departureDate } = useParams();
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let count = 0;

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/flightservices/flights?from=" +
          from +
          "&to=" +
          to +
          "&departureDate=" +
          departureDate
      )
      .then((res) => {
        setFlightData(res.data);
        setIsLoading(false);
      });
  }, [count]);

  return (
    <div>
      <h1>Display Flights</h1>
    </div>
  );
}

export default DisplayFlights;
