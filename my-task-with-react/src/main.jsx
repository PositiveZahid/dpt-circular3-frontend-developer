import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MasterPrice from "./pages/MasterPrice/MasterPrice.jsx";
import CustomPrice from "./pages/CustomPrice/CustomPrice.jsx";
import Calender from "./pages/Calender/Calender.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="master-price" element={<MasterPrice />} />
      <Route path="custom-price" element={<CustomPrice />} />
      <Route path="calender" element={<Calender />} />
      <Route path="reports" element={<Reports />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
