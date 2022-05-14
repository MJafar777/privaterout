import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./ProtectRout/Home";
import PrivateRout from "./ProtectRout/PrivateRout";
import Profile from "./ProtectRout/Profile";
// import { useSelector } from "react-redux";
// import CartButton from "./Components/CartButton";
function App() {
  const [logged, setLogged] = useState(false);
  // const showCart = useSelector((state) => state.ui.visibility);
  return (
    <div className="App" style={{ textAlign: "center" }}>
      {/* <CartButton />
      <h1>{showCart ? "hello" : ""}</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRout logged={logged} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <button onClick={() => setLogged(true)}>Log IN</button>
      <button onClick={() => setLogged(false)}>Log OUT</button>
      <Link to="/profile">Click for logged</Link>
    </div>
  );
}

export default App;
