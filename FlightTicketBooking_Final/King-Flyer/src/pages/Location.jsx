import React, { useState, useEffect } from "react";
import "../App.css";

function Location({ credentials }) {
  const paperStyle = { padding: "50px 20px", width: 500, margin: "20px auto" };
  const [code, setCode] = useState("");
  const [airportName, setAirportName] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [loc, setLoc] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const add = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const user = {
      name,
      airportName,
      code,
      country,
    };
    console.log(user);
    fetch(`http://localhost:8080/api/location/add/`, {
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
      setErrorMsg("successfully added the location");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/location/all/")
      .then((res) => res.json())
      .then((result) => {
        setLoc(result);
      });
  }, []);

  return (
    <div className="Main">
      <div
        className="col-sm-6 offset-sm-2"
        style={{ border: "1px solid black" }}
      >
        <h1 style={{ margin: "20px 20px ", textAlign: "center" }}>Location</h1>
        <div
          className="col-sm-6 offset-sm-3"
          style={{ margin: "auto", width: "50%" }}
        >
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Airport Name</label>
          <input
            type="text"
            placeholder="airportName"
            className="form-control"
            value={airportName}
            onChange={(e) => setAirportName(e.target.value)}
          />
          <br />
          <label>code</label>
          <input
            type="text"
            placeholder="code"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <label>Country</label>
          <input
            type="text"
            placeholder="country"
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {errorMsg ? (
            <div className="" style={{ color: "red", fontWeight: "bold" }}>
              {errorMsg}
            </div>
          ) : (
            <></>
          )}
          <button type="submit" className="btn btn-primary" onClick={add}>
            ADD LOCATION
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Location;