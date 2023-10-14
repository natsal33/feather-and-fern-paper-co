import React from "react";
import { Outlet } from "react-router-dom";
import "../theme.css";
import "./PageBody.css";

function PageBody() {
  return (
    <div id="PageBody" className="background-main">
      <Outlet />
    </div>
  );
}

export default PageBody;
