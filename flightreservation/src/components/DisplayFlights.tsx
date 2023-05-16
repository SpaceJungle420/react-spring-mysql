import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DisplayFlights() {
  const { from, to, departureDate } = useParams();
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
        console.log(
          "http://localhost:8080/flightservices/flights?from=" +
            from +
            "&to=" +
            to +
            "&departureDate=" +
            departureDate
        );
        console.log(res.data);
        setIsLoading(false);
      });
  }, [count]);

  function RowCreator(props: any) {
    var flight = props.item;

    return (
      <tr>
        <td>{flight.operatingAirlines}</td>
        <td>{flight.departureCity}</td>
        <td>{flight.arrivalCity}</td>
        <td>{flight.estimatedDepartureTime}</td>
        <td>
          <Link to={"/passengerDetails/" + flight.id}>Select</Link>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <h1>Display Flights</h1>
      <table>
        <thead>
          <th>Airlines</th>
          <th>Departure City</th>
          <th>Arrival City</th>
          <th>Departure Date and Time</th>
        </thead>
        <tbody>
          {!isLoading
            ? flightData.map((flight) => <RowCreator item={flight} />)
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayFlights;
