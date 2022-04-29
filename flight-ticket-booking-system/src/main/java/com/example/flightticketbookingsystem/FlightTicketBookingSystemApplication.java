package com.example.flightticketbookingsystem;

import com.example.flightticketbookingsystem.flight.model.*;
import com.example.flightticketbookingsystem.flight.service.FlightService;
import com.example.flightticketbookingsystem.flight.service.LocationService;
import com.example.flightticketbookingsystem.user.model.Address;
import com.example.flightticketbookingsystem.user.model.Contact;
import com.example.flightticketbookingsystem.user.model.Person;
import com.example.flightticketbookingsystem.user.service.AdminService;
import com.example.flightticketbookingsystem.user.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@SpringBootApplication

@CrossOrigin(origins = "*")
public class FlightTicketBookingSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlightTicketBookingSystemApplication.class, args);
    }

    @Bean
    CommandLineRunner run(AdminService adminService, LocationService locationService , FlightService flightService) {
        return args -> {
            Address address = new Address(null, "Home", "K.R.Puram", 560036L, "Bangalore", "Karnataka", "India");
            Contact contact = new Contact(null, "admin@gmail.com", 7899424475L, address);
            adminService.registerAdmin(new Person(null, "admin1234", "This is", "Admin", "password", contact, ""));

            Location location1 = new Location(null, "Bangalore", "Kempegowda International Airport", "BLR", "India");
            locationService.addLocation(location1);
            Location location2 = new Location(null, "Mangaluru", "Mangalore International Airport", "IXE", "India");
            locationService.addLocation(location2);
            Location location3 = new Location(null, "Visakhapatnam", "Visakhapatnam International Airport", "VTZ", "India");
            locationService.addLocation(location3);
            Location location4 = new Location(null, "Tirupati", "Tirupati International Airport", "TIR", "India");
            locationService.addLocation(location4);
            Location location5 = new Location(null, "Ahmedabad", "Sardar Vallabhbhai Patel International Airport", "AMD", "India");
            locationService.addLocation(location5);
            Location location6 = new Location(null, "Kochi", "Cochin International Airport", "COK", "India");
            locationService.addLocation(location6);
            Location location7 = new Location(null, "Mumbai", "Chhatrapati Shivaji Maharaj International Airport", "BOM", "India");
            locationService.addLocation(location7);
            Location location8 = new Location(null, "Amritsar", "Sri Guru Ram Dass Jee International Airport", "ATQ", "India");
            locationService.addLocation(location8);
            Location location9 = new Location(null, "Jaipur", "Jaipur International Airport", "JAI", "India");
            locationService.addLocation(location9);
            Location location10 = new Location(null, "Chennai", "Chennai International Airport", "MAA", "India");
            locationService.addLocation(location10);
            //            locationService.addLocations(List.of(location1, location2, location3, location4, location5, location6, location7, location8, location9, location10));
            Flight flight1 = new Flight(null, "Bangalore", "Mumbai", new Timestamp(122, 5, 3, 22, 52, 0, 0), new Timestamp(122, 5, 3, 00, 25, 0, 0), new Fleet(null, "6E-5344", "IndiGo", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 8000.0, 6000.0, 4000.0));
            flightService.addFlight(flight1);
            Flight flight2 = new Flight(null, "Amritsar", "Jaipur", new Timestamp(122, 5, 6, 19, 35, 0, 0), new Timestamp(122, 5, 6, 21, 10, 0, 0), new Fleet(null, "SG-3764", "SpiceJet", 70.0, 50.0, 100.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 8450.0, 5800.0, 4690.0));
            flightService.addFlight(flight2);
            Flight flight3 = new Flight(null, "Kolkata", "Srinagar", new Timestamp(122, 5, 20, 07, 40, 0, 0), new Timestamp(122, 5, 20, 13, 25, 0, 0), new Fleet(null, "I5-552", "AirAsia", 25.0, 35.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 12000.0, 6950.0, 4800.0));
            flightService.addFlight(flight3);
            Flight flight4 = new Flight(null, "Chandigarh", "Ahmedabad", new Timestamp(122, 6, 10, 18, 55, 0, 0), new Timestamp(122, 6, 10, 01, 50, 0, 0), new Fleet(null, "UK-638", "IndiGo", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 7806.0, 5082.0, 3051.0));
            flightService.addFlight(flight4);
            Flight flight5 = new Flight(null, "Bangalore", "Mumbai", new Timestamp(122, 5, 4, 22, 52, 0, 0), new Timestamp(122, 5, 4, 00, 25, 0, 0), new Fleet(null, "6E-5344", "IndiGo", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 8000.0, 6000.0, 4000.0));
            flightService.addFlight(flight5);
            Flight flight6 = new Flight(null, "Bhopal", "Guwahati", new Timestamp(122, 6, 8, 14, 40, 0, 0), new Timestamp(122, 6, 9, 12, 05, 0, 0), new Fleet(null, "AI-482", "AirIndia", 30.0, 50.0, 100.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 13000.0, 8613.0, 6500.0));
            flightService.addFlight(flight6);
            Flight flight7 = new Flight(null, "Varnasi", "Imphal", new Timestamp(122, 7, 5, 22, 00, 0, 0), new Timestamp(122, 7, 6, 07, 20, 0, 0), new Fleet(null, "6E-2815", "IndiGo", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 10608.0, 6780.0, 4058.0));
            flightService.addFlight(flight7);
            Flight flight8 = new Flight(null, "Raipur", "Shimla", new Timestamp(122, 5, 27, 8, 55, 0, 0), new Timestamp(122, 5, 27, 10, 50, 0, 0), new Fleet(null, "UK-794", "Vistara", 20.0, 50.0, 120.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 6500.0, 4080.0, 3890.0));
            flightService.addFlight(flight8);
            Flight flight9 = new Flight(null, "Shillong", "Bhubaneswar", new Timestamp(122, 6, 22, 03, 52, 0, 0), new Timestamp(122, 6, 22, 10, 00, 0, 0), new Fleet(null, "6E-5344", "IndiGo", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 13000.0, 6500.0, 4080.0));
            flightService.addFlight(flight9);
            Flight flight10 = new Flight(null, "Bangalore", "Chennai", new Timestamp(122, 5, 28, 21, 30, 0, 0), new Timestamp(122, 5, 29, 07, 45, 0, 0), new Fleet(null, "G8-399", "GO FIRST", 20.0, 50.0, 100.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 14525.0, 9853.0, 6851.0));
            flightService.addFlight(flight10);
            Flight flight11 = new Flight(null, "Chennai", "Puducherry", new Timestamp(122, 8, 13, 07, 50, 0, 0), new Timestamp(122, 8, 13, 14, 10, 0, 0), new Fleet(null, "SG-3028", "SpiceJet", 30.0, 50.0, 130.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 1213.0, 8954.0, 5786.0));
            flightService.addFlight(flight11);
            Flight flight12 = new Flight(null, "Mangalore", "Hydrabad", new Timestamp(122, 8, 25, 12, 40, 0, 0), new Timestamp(122, 8, 25, 21, 40, 0, 0), new Fleet(null, "AI-680", "AirIndia", 25.0, 30.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 20232.0, 16253.0, 14200.0));
            flightService.addFlight(flight12);
            Flight flight13 = new Flight(null, "Puducherry", "Visakhapatnam", new Timestamp(122, 7, 3, 10, 15, 0, 0), new Timestamp(122, 7, 3, 22, 10, 0, 0), new Fleet(null, "I5-517", "AirAsia", 50.0, 50.0, 80.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 10998.0, 7283.0, 5258.0));
            flightService.addFlight(flight13);
            Flight flight14 = new Flight(null, "Kerala", "Bangalore", new Timestamp(122, 5, 10, 21, 15, 0, 0), new Timestamp(122, 5, 10, 22, 55, 0, 0), new Fleet(null, "AI-528", "Ailliance Air", 20.0, 50.0, 100.0), new FlightStatus(null, 0.0, 0.0, 0.0), new Fare(null, 10298.0, 6583.0, 3258.0));
            flightService.addFlight(flight14);
        };
    }

//    @Bean
//    CommandLineRunner run(LocationService locationService) {
//        return args -> {
//            Location location1 = new Location(null, "Bangalore", "Kempegowda International Airport", "BLR", "India");
//            Location location2 = new Location(null, "Mangaluru", "Mangalore International Airport", "IXE", "India");
//            Location location3 = new Location(null, "Visakhapatnam", "Visakhapatnam International Airport", "VTZ", "India");
//            Location location4 = new Location(null, "Tirupati", "Tirupati International Airport", "TIR", "India");
//            Location location5 = new Location(null, "Ahmedabad", "Sardar Vallabhbhai Patel International Airport", "AMD", "India");
//            Location location6 = new Location(null, "Kochi", "Cochin International Airport", "COK", "India");
//            Location location7 = new Location(null, "Mumbai", "Chhatrapati Shivaji Maharaj International Airport", "BOM", "India");
//            Location location8 = new Location(null, "Amritsar", "Sri Guru Ram Dass Jee International Airport", "ATQ", "India");
//            Location location9 = new Location(null, "Jaipur", "Jaipur International Airport", "JAI", "India");
//            Location location10 = new Location(null, "Chennai", "Chennai International Airport", "MAA", "India");
//            locationService.addLocations(List.of(location1, location2, location3, location4, location5, location6, location7, location8, location9, location10));
//        };
//    }

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
