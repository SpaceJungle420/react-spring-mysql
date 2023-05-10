package repos;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
