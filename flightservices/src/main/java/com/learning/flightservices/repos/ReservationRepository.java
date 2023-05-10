package com.learning.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.flightservices.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
