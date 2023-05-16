import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindFlight() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/displayFlights/" + from + "/" + to + "/" + departureDate);
  };

  return (
    <div>
      <h1>Find Flight</h1>
      <form>
        From:{" "}
        <input
          type="text"
          name="from"
          onChange={(e) => setFrom(e.target.value)}
        />
        To:{" "}
        <input type="text" name="to" onChange={(e) => setTo(e.target.value)} />
        Departure Date:{" "}
        <input
          type="text"
          name="departureDare"
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default FindFlight;
