import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchScreen from "./screens/SearchScreen";
import DetailScreen from "./screens/DetailScreen";
import { useRoutes } from "hookrouter";

export default function App() {
  const routes = {
    "/": () => <SearchScreen />,
    "/detail": () => <DetailScreen />
  };
  const routeResult = useRoutes(routes);

  return routeResult;
}
