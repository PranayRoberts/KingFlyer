package com.example.flightticketbookingsystem.flight.repository;

import com.example.flightticketbookingsystem.flight.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepo extends JpaRepository<Location,Integer> {
    Location findLocationsByAirportName(String airportName);
    List<Location> findLocationByName(String name);
}
