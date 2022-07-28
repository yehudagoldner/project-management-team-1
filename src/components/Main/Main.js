import * as React from "react";
import Routing from "../Routing/Routing";
import {  Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <Routing />
      <Outlet />
    </div>
  );
}
