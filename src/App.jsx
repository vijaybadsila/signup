import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./Add";
import Employees from "./Empoolee";
import WelcomePage from "./WelCome";
import Login from "./login";
import Signin from "./sigin";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        <Route path="/Emp" element={<Employees />} />
        <Route path="/add" element={<CreateEmployee />} />
        <Route path="/WelcomePage" element={<WelcomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

