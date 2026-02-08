import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/Home/JobDetails";
import Routes from "../Routes/Routes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // here routes equal private route
      {
        path: "jobApply/:id",
        element: (
          <Routes>
            <JobApply></JobApply>
          </Routes>
        ),
      },
      {
        path: "myApplications",
        element: (
          <Routes>
            <MyApplications></MyApplications>
          </Routes>
        ),
      },

      {
        path: "addJob",
        element: (
          <Routes>
            <AddJob></AddJob>
          </Routes>
        ),
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signin",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
