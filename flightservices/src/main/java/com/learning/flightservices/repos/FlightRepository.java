package com.learning.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.flightservices.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
