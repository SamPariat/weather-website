import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import OneDayForeCast from "./components/pages/1DayForeCast";
import FiveDayForeCast from "./components/pages/5DayForeCast";
import CurrentForeCast from "./components/pages/CurrentForeCast";
import NavbarFooter from "./components/Containers/NavbarFooter";
import ErrorText from "./components/Texts/ErrorText";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarFooter />,
    errorElement: <ErrorText />,
    children: [
      { path: "/oneDayForecast", element: <OneDayForeCast /> },
      { path: "/fiveDayForecast", element: <FiveDayForeCast /> },
      { path: "/currentForecast", element: <CurrentForeCast /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
