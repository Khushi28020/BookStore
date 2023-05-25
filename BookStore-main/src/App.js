import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import User from "./components/User";
import Employee from "./components/Employee";

function App() {
  const clickme = () => {
    alert("clicked");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>hello</div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/emp">employee</NavLink>
          <Routes>
            <Route path="/" element={<User name="r" fun={clickme} />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
