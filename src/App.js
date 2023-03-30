// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// to host page on github we are commenting all the routing components and about page
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // state variable which tells whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [btnModeText, setBtnModeText] = useState("Enable Dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1a26";
      setBtnModeText("Enable Light Mode");
      showAlert("Dark mode has been enabled", "success");

      // if we want to change page title while clicking on click event listener
      document.title = "TextUtils - Dark Mode";

      // not recommended to continuosly blink msgs in title bar || bad user experience
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now!";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtnModeText("Enable Dark Mode");
      showAlert("Light mode has been enabled", "success");

      // if we want to change page title while clicking on click event listener
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        btnModeText={btnModeText}
      />
      {/* if we dontpass props here then the default props values are applied  */}
      {/* <Navbar />; */}
      {/* importing TextForm component */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to Analyze"
          mode={mode}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

// NOTE :
// In react-router-dom v6, "Switch" is replaced by routes "Routes".
// SYNTAX TO ADD ROUTE INSIDE ROUTER :
// {
//   /* <Route path='/' element={<Home/>} /> */
// }

// The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
