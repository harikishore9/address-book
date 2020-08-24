import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

export default function GatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
}
