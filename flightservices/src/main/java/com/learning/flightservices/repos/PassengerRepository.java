package com.learning.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.flightservices.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
