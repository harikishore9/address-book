import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UnGatedRoute({ component: Component, ...rest }) {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}
