import React, { useState } from "react";
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import "../App.css";
function Fleet(credentials) {
  const [code, setCode] = useState("");
  const [model, setmodel] = useState("");
  const [totalEconomySeats, setTotalEconomySeats] = useState("");
  const [totalPremiumSeats, setTotalPremiumSeats] = useState("");
  const [totalBusinessSeats, setTotalBusinessSeats] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const add = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const user = {
      code,
      model,
      totalEconomySeats,
      totalPremiumSeats,
      totalBusinessSeats,
    };
    if (code === "" || model === "" || totalEconomySeats === "" || totalPremiumSeats === "" || totalBusinessSeats === "") {
      alert("No null values")
    }
    else {
      console.log(user);
      fetch(`http://localhost:8080/api/fleet/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
        mode: "cors",
        body: JSON.stringify(user),
      }).then((res) => {
        console.log("success")
        setErrorMsg("successfully added the fleet");
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
    <div className="Main" style={{ margin: "auto", align: "center" }}>
      
      <h1 style={{ textAlign: "center" }}> ADD FLEET</h1>
          <Form noValidate validated={validated} >

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
      <br />
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
              Please enter the mobile number.
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
              Please enter premium seats.
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
              Please enter premium seats.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <div style={{ margin: "20px 20px ", textAlign: "center" }}>
      {errorMsg ? (
        <div className="" style={{ color: "red", fontWeight: "bold" }}>
          {errorMsg}
        </div>
      ) : (
        <></>
          )}
        </div>
        
      <div style={{ margin: "20px 20px ", textAlign: "center" }}>
        <Button type="submit" onClick={add}> Submit form</Button>
        </div>
        </Form>
    </div>
  );
}



export default Fleet;