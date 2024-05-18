import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/Sign Up/SignUp";
import SignIn from "./Components/Sign In/SignIn";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";
import CardEdit1 from "./Components/CardsOneEdit/CardEdit1";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>
        }
      />
      <Route path="/SignIn" element={<SignIn />} />
      <Route
        path="/Home"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cards" element={<CardEdit1 />} />
    </Routes>
  );
}

export default App;
