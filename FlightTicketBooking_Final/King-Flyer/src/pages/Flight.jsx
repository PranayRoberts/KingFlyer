import React, {useState} from "react";
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
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
    if (code === "" || model === "" || totalEconomySeats === "" || totalPremiumSeats === "" || totalBusinessSeats === "" || departureLocation === "" || arrivalLocation === "" || remainingEconomySeats === "" || remainingBusinessSeats === "" || remainingPremiumSeats === "" || arrivalTime === "" || departureTime === "" || economyFare === "" || premiumFare === "" || businessFare === "") {
      alert("No null values")
    }
    else {
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
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }

      setValidated(true);
    };
  }

  const [validated, setValidated] = useState(false);


  return (

    <div className="Main" style={{ margin: "auto",align:"center"}}>
      <h1 style={{  textAlign: "center" }}> ADD FLIGHT</h1>
    <Form noValidate validated={validated} >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>departure Location</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="departureLocation"
            value={departureLocation}
           onChange={(e) => setDepartureLocation(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>arrival Location</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="arrival Location"
            value={arrivalLocation}
            onChange={(e) => setArrivalLocation(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Fleet code</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="code"
              aria-describedby="inputGroupPrepend"
              required
              value={code}
           onChange={(e) => setCode(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the code
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Fleet model</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Fleet model"
              aria-describedby="inputGroupPrepend"
              required
              value={model}
           onChange={(e) => setmodel(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the model.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>totalEconomySeats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="totalEconomySeats"
              aria-describedby="inputGroupPrepend"
              required
              value={totalEconomySeats}
           onChange={(e) => setTotalEconomySeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter total economy seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>totalPremiumSeats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="totalPremiumSeats"
              aria-describedby="inputGroupPrepend"
              required
              value={totalPremiumSeats}
           onChange={(e) => setTotalPremiumSeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter total premium seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>total Business Seats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="totalBusinessSeats"
              aria-describedby="inputGroupPrepend"
              required
              value={totalBusinessSeats}
           onChange={(e) => setTotalBusinessSeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter total business seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <br />
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Remaning Economy Seats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="remainingEconomySeats"
              aria-describedby="inputGroupPrepend"
              required
              value={remainingEconomySeats}
           onChange={(e) => setRemainingEconomySeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter remainig seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Remaning Premium Seats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="remainingPremiumSeats"
              aria-describedby="inputGroupPrepend"
              required
              value={remainingPremiumSeats}
           onChange={(e) => setRemainingPremiumSeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter premium seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Remaning Business Seats</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="remainingBusinessSeats"
              aria-describedby="inputGroupPrepend"
              required
              value={remainingBusinessSeats}
           onChange={(e) => setRemainingBusinessSeats(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter premium seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <br />
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>departure Time</Form.Label>
          <Form.Control type="Date" placeholder="departureTime" required value={departureTime} onChange={(e) => setDepartureTime(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>arrival Time</Form.Label>
          <Form.Control type="Date" placeholder="arrival Time" required value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>economy Fare</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="economyFare"
              aria-describedby="inputGroupPrepend"
              required
              value={economyFare}
           onChange={(e) => setEconomyFare(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter economy fare.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>premium Fare</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="premiumFare"
              aria-describedby="inputGroupPrepend"
              required
              value={premiumFare}
           onChange={(e) => setPremiumFare(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter premium fare.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Business Fare</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="businessFare"
              aria-describedby="inputGroupPrepend"
              required
              value={businessFare}
           onChange={(e) => setBusinessFare(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter business fare.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      {errorMsg ? (
          <div className="" style={{ color: "red", fontWeight: "bold" }}>
            {errorMsg}
          </div>
        ) : (
          <></>
        )}
        <div style={{ margin: "20px 20px ", textAlign: "center" }}>
<Button type="submit" onClick={add}> Submit form</Button>
        </div>

      

    </Form>
  </div>

);

}



export default Flight;