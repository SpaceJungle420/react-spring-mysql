import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PassengerDetails() {
  const { flightId } = useParams();
  const [data, setData] = useState({
    operatingAirlines: "empty",
    departureCity: "empty",
    arrivalCity: "empty",
    dateOfDeparture: "empty",
  });
  const [isLoading, setIsLoading] = useState(true);
  let count = 0;

  useEffect(() => {
    axios
      .get("http://localhost:8080/flightservices/flights/" + flightId)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [count]);
  return (
    <div>
      <h1>Passenger Details</h1>
      <h2>Confirm Reservation:</h2>
      <h2>Flight Details:</h2>
      Airlines: {!isLoading ? data.operatingAirlines : ""}
      <br />
      DepartureCity: {!isLoading ? data.departureCity : ""}
      <br />
      Arrival City: {!isLoading ? data.arrivalCity : ""}
      <br />
      Departure Date: {!isLoading ? data.dateOfDeparture : ""}
      <br />
    </div>
  );
}

export default PassengerDetails;
