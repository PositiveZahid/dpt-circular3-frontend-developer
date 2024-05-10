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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route path="" element={<Dashboard></Dashboard>} />
      <Route path="master-price" element={<MasterPrice></MasterPrice>} />
      <Route path="custom-price" element={<CustomPrice></CustomPrice>} />
      <Route path="calender" element={<Calender></Calender>} />
      <Route path="reports" element={<Reports></Reports>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
