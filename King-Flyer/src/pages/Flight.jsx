import React, {useState} from "react";

import '../App.css';
function Flight({credentials}) {
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [code, setCode] = useState("");
  const [model, setmodel] = useState("");
  const [totalEconomySeats, setTotalEconomySeats] = useState("");
  const [totalPremiumSeats, setTotalPremiumSeats] = useState("");
  const [totalBusinessSeats, setTotalBusinessSeats] = useState("");
  const [remainingEconomySeats, setRemainingEconomySeats] = useState("");
  const [remainingPremiumSeats, setRemainingPremiumSeats] = useState("");
  const [remainingBusinessSeats, setRemainingBusinessSeats] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [economyFare, setEconomyFare] = useState("");
  const [premiumFare, setPremiumFare] = useState("");
  const [businessFare, setBusinessFare] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const add = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const user = {
      departureLocation,
      arrivalLocation,
      departureTime,
      arrivalTime,
      fleet: {
        code,
        model,
        totalEconomySeats,
        totalPremiumSeats,
        totalBusinessSeats,
      },
      status: {
        remainingEconomySeats,
        remainingPremiumSeats,
        remainingBusinessSeats,
      },
      fare: {
        economyFare,
        premiumFare,
        businessFare,
      },
    };
    console.log(user);
    fetch(`http://localhost:8080/api/flight/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        "Authorization": `Bearer ${credentials.access_token}`
      },
      mode: "cors",
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 200) {
        setErrorMsg("success");
      } else if (res.status === 500) {
        setErrorMsg("flight exists");
      }
    });
  };

  return (
    <div className="Main">
    <div className="col-sm-6 offset-sm-2">
      <h1>Add Flight</h1>
      <div className="col-sm-6 offset-sm-3">
        <label>departure Location</label>
        <input
          type="text"
          placeholder="departure Location"
          className="form-control"
          value={departureLocation}
          onChange={(e) => setDepartureLocation(e.target.value)}
        />
        <br />
        <label>arrival Location</label>
        <input
          type="text"
          placeholder="arrivalLocation"
          className="form-control"
          value={arrivalLocation}
          onChange={(e) => setArrivalLocation(e.target.value)}
        />
        <br />
        <label>Fleet code</label>
        <input
          type="text"
          placeholder="code"
          className="form-control"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <label>Fleet model</label>
        <input
          type="text"
          placeholder="model"
          className="form-control"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
        />
        <br />
        <label> total Economy Seats</label>
        <input
          type="text"
          placeholder="totalEconomySeats"
          className="form-control"
          value={totalEconomySeats}
          onChange={(e) => setTotalEconomySeats(e.target.value)}
        />
        <br />
        <label> total Premium Seats</label>
        <input
          type="text"
          placeholder="totalPremiumSeats"
          className="form-control"
          value={totalPremiumSeats}
          onChange={(e) => setTotalPremiumSeats(e.target.value)}
        />
        <br />
        <label> total Business Seats</label>
        <input
          type="text"
          placeholder="totalBusinessSeats"
          className="form-control"
          value={totalBusinessSeats}
          onChange={(e) => setTotalBusinessSeats(e.target.value)}
        />
        <br />
        <label>Remaning Economy Seats</label>
        <input
          type="text"
          placeholder="remainingEconomySeats"
          className="form-control"
          value={remainingEconomySeats}
          onChange={(e) => setRemainingEconomySeats(e.target.value)}
        />
        <br />
        <label>Remaning Premium Seats</label>
        <input
          type="text"
          placeholder="remainingPremiumSeats"
          className="form-control"
          value={remainingPremiumSeats}
          onChange={(e) => setRemainingPremiumSeats(e.target.value)}
        />
        <br />
        <label>Remaning Business Seats</label>
        <input
          type="text"
          placeholder="remainingBusinessSeats"
          className="form-control"
          value={remainingBusinessSeats}
          onChange={(e) => setRemainingBusinessSeats(e.target.value)}
        />
        <br />
        <label>departure Time</label>
        <input
          type="date"
          placeholder="departureTime"
          className="form-control"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
        />
        <br />
        <label>arrival Time</label>
        <input
          type="date"
          placeholder="arrivalTime"
          className="form-control"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
        />
        <br />
        <label>economy Fare</label>
        <input
          type="number"
          placeholder="economyFare"
          className="form-control"
          value={economyFare}
          onChange={(e) => setEconomyFare(e.target.value)}
        />
        <br />
        <label>premium Fare</label>
        <input
          type="number"
          placeholder="premiumFare"
          className="form-control"
          value={premiumFare}
          onChange={(e) => setPremiumFare(e.target.value)}
        />
        <br />
        <label>Business Fare</label>
        <input
          type="number"
          placeholder="BusinessFare"
          className="form-control"
          value={businessFare}
          onChange={(e) => setBusinessFare(e.target.value)}
        />
        <br />
        {errorMsg ? (
          <div className="" style={{ color: "red", fontWeight: "bold" }}>
            {errorMsg}
          </div>
        ) : (
          <></>
        )}
        <br />
        <button type="submit" className="btn btn-primary" onClick={add}>
          ADD FLIGHT
        </button>
      </div>
    </div>

    </div>
  );
}

export default Flight;