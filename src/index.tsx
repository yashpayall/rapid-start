import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import FinalCalendar from "./components/calendar/FinalCalendar";
import AllCustomer from "./components/allcustomer/AllCustomer";
import DealsAndRewarDasboard from "./components/deals/DealsAndRewarDasboard";
import Crmlead from "./components/leadcapture/Crmlead";
import Dashboard2 from "./components/dashboard/Dashboard2";
import CrmTableData from "./components/projects/CrmTableData";
import Resourses from "./components/resources/Resourses";
import CrmSettings from "./components/settings/CrmSettings";
import IntegrationMainPage from "./integrationman/IntegrationMainPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard2 />
      </Layout>
    ),
  },
  {
    path: "/calendar",
    element: (
      <Layout>
        <FinalCalendar />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <CrmTableData />
      </Layout>
    ),
  },
  {
    path: "/resources",
    element: (
      <Layout>
        <Resourses />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <CrmSettings />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <AllCustomer />
      </Layout>
    ),
  },
  {
    path: "/integration",
    element: (
      <Layout>
        <IntegrationMainPage />
      </Layout>
    ),
  },
  {
    path: "/deals",
    element: (
      <Layout>
        <DealsAndRewarDasboard />
      </Layout>
    ),
  },
  {
    path: "/leadcapture",
    element: (
      <Layout>
        <Crmlead />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
