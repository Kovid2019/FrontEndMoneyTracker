import "./App.css";
import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";
import {
  ToastContainer,
  toast,
} from "react-toastify"; /*First is component and Second is function which 
is used to throw the Toastify Message.*/
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
