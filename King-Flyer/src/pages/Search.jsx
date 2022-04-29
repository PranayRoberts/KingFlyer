import React from "react";
import { useState } from "react";
import ListFlightsComponent from "../components/ListFlightsComponent";
import { Link } from "react-router-dom";
import '../App.css';
function Search({isLoggedIn}) {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [searchData, setSearchData] = useState([]);

  function updateDeparture(event) {
    setDeparture(event.target.value);
  }
  function updateArrival(event) {
    setArrival(event.target.value);
  }
  async function search() {
    if (departure === "" || arrival === "") {
      alert("Please enter some values");
    }

    let result = await fetch(`http://localhost:8080/api/flight/search_flights?departure=${departure}&arrival=${arrival}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    
    if (result.status === 201) {
      // alert("Flight found");
      const dataJson = await result.json();
      console.log(dataJson);
      // const dataJson = JSON.stringify(result);
      const allValidLocationData = dataJson.map((obj) => ({
        id:obj.id,
        arrivalLocation: obj.arrivalLocation,
        departureLocation: obj.departureLocation,
        
        remainingEconomySeats: obj.status.remainingEconomySeats,
        remainingPremiumSeats: obj.status.remainingPremiumSeats,
        remainingBusinessSeats: obj.status.remainingBusinessSeats,
      }));
      setSearchData(allValidLocationData);
    } else {
      alert("No such flights");
    }
  }
  return (
    <div className="Main">
      <h1 style={{ margin: "20px 20px ",textAlign: "center" }}>Search for Flights!</h1>

      <div className="col-sm-6 offset-sm-3">
        <input
          placeholder="Departure Location"
          id="departureLocation"
          onChange={updateDeparture}
          className="form-control"
          value={departure}
        />
        <br />
        <input
          placeholder="Arrival Location"
          id="arrivalLocation"
          onChange={updateArrival}
          className="form-control"
          value={arrival}
        />
        <br />
        <button onClick={search} className="btn btn-primary">
          Search
        </button>

        {/* <Link to="/login">
          <button className="btn btn-danger" style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </Link> */}
      </div>


      <br />

      {searchData.length>0 && 
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{width : "15%"}}>Arrival</th>
              <th style={{width : "15%"}}>Departure</th>
              <th style={{width : "15%"}}>Remaining Business</th>
              <th style={{width : "15%"}}>Remaining Economy Seats</th>
              <th style={{width : "15%"}}>Remaining Premium Seats</th>
              <th style={{width : "15%"}}>Booking</th>
            </tr>
          </thead>
        </table>}
      {searchData.length > 0 && (
        searchData.map((obj) => <ListFlightsComponent isLoggedIn={isLoggedIn} data={obj} key = {obj.id} />)
      )}
      
    </div>
  );
}

export default Search;
