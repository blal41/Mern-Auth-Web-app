import LoginPage from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import PrivateRoute from "./Component/PrivateRoute";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/Sign-in" element={<LoginPage />}></Route>
        <Route path="/Sign-up" element={<Signup />}></Route>

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
