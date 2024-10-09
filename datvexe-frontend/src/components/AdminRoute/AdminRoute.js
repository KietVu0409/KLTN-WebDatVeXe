import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem("USER_LOGIN")) {
        return <Component {...props} />;
      } else {
        alert("Vui lòng đăng nhập");
        return <Redirect to="/" />;
      }
    }}
  />
);

export default AdminRoute;
