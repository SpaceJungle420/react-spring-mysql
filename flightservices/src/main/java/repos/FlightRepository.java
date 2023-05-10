package repos;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
