package repos;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
