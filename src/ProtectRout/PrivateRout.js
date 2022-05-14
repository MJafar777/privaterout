import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRout({ logged }) {
  return logged ? <Outlet /> : <Navigate to="" />;
}
export default PrivateRout;
