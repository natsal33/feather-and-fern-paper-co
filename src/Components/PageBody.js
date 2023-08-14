import React from "react";
import { Outlet } from "react-router-dom";
import "./PageBody.css";

function PageBody() {
  return (
    <div id="PageBody">
      <Outlet />
    </div>
  );
}

export default PageBody;
