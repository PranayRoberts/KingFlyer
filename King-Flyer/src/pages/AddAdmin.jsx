import React, { useState } from "react";
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';

import "../App.css";

function AddAdmin() {
  const [firstname, setFirstname] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [type, setType] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const register = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const admin = {
      username,
      firstname,
      lastname,
      password,
      contact: {
        email,
        mobileNo,
        address: {
          type,
          addressLine,
          zipCode,
          city,
          state,
          country
        }

      }
    };


    if (username === "" ||  firstname === "" || lastname==="" || password==="" || email==="" || mobileNo=="" || type==="" || addressLine==="" || zipCode=="" || city==="" || state==="" || country ==="" ){
      alert("No null values")
    }
    else{
    console.log(admin);
    fetch('http://localhost:8080/api/admin/register/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      mode: "cors",
      body: JSON.stringify(admin),
    }).then((res) => {
      if (res.status === 200) {
        setErrorMsg("success");
      } else if (res.status === 500) {
        setErrorMsg("Admin exists, try a different one");
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
    // <div className="Main">
    //   <h1>Register</h1>
    //   <div className="col-sm-6 offset-sm-2">
    //   <h1>SignUp Page</h1>
    //   <div className="col-sm-6 offset-sm-3">
    //     <label>username</label>
    //     <input
    //       type="text"
    //       placeholder="username"
    //       className="form-control"
    //       value={username}
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <br />
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       placeholder="password"
    //       className="form-control"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //       <br />
    //       <label>firstname</label>
    //     <input
    //       type="text"
    //       placeholder="firstname"
    //       className="form-control"
    //       value={firstname}
    //       onChange={(e) => setFirstname(e.target.value)}
    //     />
    //       <br />
    //       <label>lastname</label>
    //     <input
    //       type="text"
    //       placeholder="lastname"
    //       className="form-control"
    //       value={lastname}
    //       onChange={(e) => setLastname(e.target.value)}
    //     />
    //       <br />
    //       <label>email</label>
    //     <input
    //       type="text"
    //       placeholder="email"
    //       className="form-control"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //       <br />
    //       <label>mobileNo</label>
    //     <input
    //       type="number"
    //       placeholder="mobileNo"
    //       className="form-control"
    //       value={mobileNo}
    //       onChange={(e) => setMobileNo(e.target.value)}
    //     />
    //       <br />
    //       <label>Type   </label>
    //       <input
    //         type="radio"
    //         label="home"
    //         className="form-control"
    //         value="Home"
    //         onChange={(e) => setType(e.target.value)} /> 
    //       <label> Home  </label>  
    //       <input
    //         type="radio"
    //         label="office"
    //         value = "Office"
    //         className="form-control"
    //         onClick={(e) => setType(e.target.value)} />
    //       <lable> Office  </lable>
    //       <br />
    //       <label>addressLine</label>
    //     <input
    //       type="text"
    //       placeholder="addressLine"
    //       className="form-control"
    //       value={addressLine}
    //       onChange={(e) => setAddressLine(e.target.value)}
    //       />
    //       <br />
    //       <label>zipCode</label>
    //     <input
    //       type="number"
    //       placeholder="zipCode"
    //       className="form-control"
    //       value={zipCode}
    //       onChange={(e) => setZipCode(e.target.value)}
    //     />
    //       <br />
    //       <label>city</label>
    //     <input
    //       type="text"
    //       placeholder="city"
    //       className="form-control"
    //       value={city}
    //       onChange={(e) => setCity(e.target.value)}
    //     />
    //       <br />
    //       <label>state</label>
    //     <input
    //       type="text"
    //       placeholder="state"
    //       className="form-control"
    //       value={state}
    //       onChange={(e) => setState(e.target.value)}
    //     />
    //       <br />
    //       <label>country</label>
    //     <input
    //       type="text"
    //       placeholder="country"
    //       className="form-control"
    //       value={country}
    //       onChange={(e) => setCountry(e.target.value)}
    //     />
    //     <br />
    //     {errorMsg ? (
    //       <div className="" style={{ color: "red", fontWeight: "bold" }}>
    //         {errorMsg}
    //       </div>
    //     ) : (
    //       <></>
    //     )}
    //     <br />
    //     <button type="submit" className="btn btn-primary" onClick={register}>
    //       Register
    //     </button>
    //     {/*
    //       <p className="forgot-password text-right">
    //         // Already registered <a href="/sign-in">sign in?</a>
    //         //{" "}
    //       </p> */}
    //     </div>
    //     </div>
    // </div>
    <Form noValidate validated={validated} className="Main" >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstname}
           onChange={(e) => setFirstname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="username"
              aria-describedby="inputGroupPrepend"
              required
              value={username}
           onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="password"
              aria-describedby="inputGroupPrepend"
              required
              value={password}
           onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please the password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>mobileNo</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="mobile number"
              aria-describedby="inputGroupPrepend"
              required
              value={mobileNo}
           onChange={(e) => setMobileNo(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the mobile number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
              value={email}
           onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the mail id.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>type</Form.Label>
          <Form.Control type="text" placeholder="type" required value={type} onChange={(e) => setType(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Type.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>address</Form.Label>
          <Form.Control type="text" placeholder="address" required value={addressLine} onChange={(e) => setAddressLine(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required value={state} onChange={(e) => setState(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" required  value={country} onChange={(e) => setCountry(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="number" placeholder="Zip" required value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" onClick={register}>Submit form</Button>

      {errorMsg ? (
          <div className="" style={{ color: "red", fontWeight: "bold" }}>
            {errorMsg}
          </div>
        ) : (
          <></>
        )}
    </Form>
    


  );
}

export default AddAdmin;