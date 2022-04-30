import React, { useState } from "react";

import "../App.css";
function Flight({ credentials }) {
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
        Authorization: `Bearer ${credentials.access_token}`,
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
      <div className="col-sm-6 offset-sm-2" style={{border:"1px solid black"}}>
          <h1 style={{ margin: "20px 20px ", textAlign: "center" }}>
            Add Flight
          </h1>
          <div style={{ width: "100%" }}>
            <table style={{ width: "100%" }}>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>departure Location</label>
                  <input
                    type="text"
                    placeholder="departure Location"
                    className="form-control"
                    value={departureLocation}
                    onChange={(e) => setDepartureLocation(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>arrival Location</label>
                  <input
                    type="text"
                    placeholder="arrivalLocation"
                    className="form-control"
                    value={arrivalLocation}
                    onChange={(e) => setArrivalLocation(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>Fleet code</label>
                  <input
                    type="text"
                    placeholder="code"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>Fleet model</label>
                  <input
                    type="text"
                    placeholder="model"
                    className="form-control"
                    value={model}
                    onChange={(e) => setmodel(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label> total Economy Seats</label>
                  <input
                    type="text"
                    placeholder="totalEconomySeats"
                    className="form-control"
                    value={totalEconomySeats}
                    onChange={(e) => setTotalEconomySeats(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label> total Premium Seats</label>
                  <input
                    type="text"
                    placeholder="totalPremiumSeats"
                    className="form-control"
                    value={totalPremiumSeats}
                    onChange={(e) => setTotalPremiumSeats(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label> total Business Seats</label>
                  <input
                    type="text"
                    placeholder="totalBusinessSeats"
                    className="form-control"
                    value={totalBusinessSeats}
                    onChange={(e) => setTotalBusinessSeats(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>Remaning Economy Seats</label>
                  <input
                    type="text"
                    placeholder="remainingEconomySeats"
                    className="form-control"
                    value={remainingEconomySeats}
                    onChange={(e) => setRemainingEconomySeats(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>Remaning Premium Seats</label>
                  <input
                    type="text"
                    placeholder="remainingPremiumSeats"
                    className="form-control"
                    value={remainingPremiumSeats}
                    onChange={(e) => setRemainingPremiumSeats(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>Remaning Business Seats</label>
                  <input
                    type="text"
                    placeholder="remainingBusinessSeats"
                    className="form-control"
                    value={remainingBusinessSeats}
                    onChange={(e) => setRemainingBusinessSeats(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>departure Time</label>
                  <input
                    type="date"
                    placeholder="departureTime"
                    className="form-control"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>arrival Time</label>
                  <input
                    type="date"
                    placeholder="arrivalTime"
                    className="form-control"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>economy Fare</label>
                  <input
                    type="number"
                    placeholder="economyFare"
                    className="form-control"
                    value={economyFare}
                    onChange={(e) => setEconomyFare(e.target.value)}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <label>premium Fare</label>
                  <input
                    type="number"
                    placeholder="premiumFare"
                    className="form-control"
                    value={premiumFare}
                    onChange={(e) => setPremiumFare(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>
                  <label>Business Fare</label>
                  <input
                    type="number"
                    placeholder="BusinessFare"
                    className="form-control"
                    value={businessFare}
                    onChange={(e) => setBusinessFare(e.target.value)}
                  />
                </td>
              </tr>
            </table>
            {errorMsg ? (
              <div className="" style={{ color: "red", fontWeight: "bold" }}>
                {errorMsg}
              </div>
            ) : (
              <></>
            )}
            <button type="submit" className="btn btn-primary" onClick={add}>
              ADD FLIGHT
            </button>
            <br />
            <br />
          </div>
      </div>
    </div>
  );
}

export default Flight;
