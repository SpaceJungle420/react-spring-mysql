package integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dto.CreateReservationRequest;
import entities.Flight;
import entities.Passenger;
import entities.Reservation;
import jakarta.transaction.Transactional;
import repos.FlightRepository;
import repos.PassengerRepository;
import repos.ReservationRepository;

@RestController
public class ReservationRestController {

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    PassengerRepository passengerRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @RequestMapping(value = "/flights", method = RequestMethod.GET)
    public List<Flight> findFlights() {
        return flightRepository.findAll();
    }

    @RequestMapping(value = "/reservations", method = RequestMethod.POST)
    @Transactional
    public Reservation saveReservation(CreateReservationRequest request) {
        Flight flight = flightRepository.findById(request.getFlightId()).get();

        Passenger passenger = new Passenger();
        passenger.setFirstName(request.getPassengerFirstName());
        passenger.setLastName(request.getPassengerLastName());
        passenger.setMiddleName(request.getPassengerMiddleName());
        passenger.setEmail(request.getPassengerEmail());
        passenger.setFirstName(request.getPassengerPhone());

        Passenger savedPassenger = passengerRepository.save(passenger);

        Reservation reservation = new Reservation();
        reservation.setFlight(flight);
        reservation.setPassenger(savedPassenger);
        reservation.setCheckIn(false);

        return reservationRepository.save(reservation);
    }

    @RequestMapping(value = "/reservations/{id}")
    public Reservation findReservation(@PathVariable("id") int id) {
        return reservationRepository.findById(id).get();
    }
}
