import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FindFlight from "./components/FindFlights";
import DisplayFlights from "./components/DisplayFlights";
import PassengerDetails from "./components/PassengerDetails";
import ConfirmReservation from "./components/ConfirmReservation";

function App() {
  return (
    <div>
      <h1>Flight Reservation App</h1>
      <Routes>
        <Route path="/" element={<FindFlight />} />
        <Route
          path="/displayFlights/:from/:to/:departureCity"
          element={<DisplayFlights />}
        />
        <Route path="/passengerDetails" element={<PassengerDetails />} />
        <Route path="/confirmResorvation" element={<ConfirmReservation />} />
      </Routes>
    </div>
  );
}

export default App;
