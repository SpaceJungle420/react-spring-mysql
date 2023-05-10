package integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import entities.Flight;
import repos.FlightRepository;

@RestController
public class ReservationRestController {

    @Autowired
    FlightRepository flightRepository;

    @RequestMapping(value = "/flights", method = RequestMethod.GET)
    public List<Flight> findFlights() {
        return flightRepository.findAll();
    }
}
