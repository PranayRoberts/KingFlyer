package com.example.flightticketbookingsystem.booking.model;

import com.example.flightticketbookingsystem.flight.model.Flight;

import javax.persistence.*;

import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;
    private Long bookingNumber;
    private Date bookingDate;
    private Date travelDate;
    private Double travelCost;
    private Integer bookedFlightId;
}
