import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Location from "./pages/Location";
import BookedTickets from "./pages/BookedTickets";
import AddAdmin from "./pages/AddAdmin";
import Flight from "./pages/Flight";
import Fleet from "./pages/Fleet";
import FlightStatus from "./pages/FlightStatus";
import Fare from "./pages/Fare";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import LoginRegisterController from "./pages/LoginRegisterController";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [credentials, setCredentials] = useState({
    access_token: "",
    role: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <SideBar
          credentials={credentials}
          setCredentials={setCredentials}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Search
                credentials={credentials}
                setCredentials={setCredentials}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/booked_tickets"
            element={
              <BookedTickets
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/add_admin"
            element={
              <AddAdmin
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/location"
            element={
              <Location
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/flight"
            element={
              <Flight
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/fleet"
            element={
              <Fleet
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/flight_status"
            element={
              <FlightStatus
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/fare"
            element={
              <Fare
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                credentials={credentials}
                setCredentials={setCredentials}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                credentials={credentials}
                setCredentials={setCredentials}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/signup" element={<LoginRegisterController />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
