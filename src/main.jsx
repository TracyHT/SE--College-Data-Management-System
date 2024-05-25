import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import Notification from "./pages/notification/notification.jsx";
import NoticeBoard from "./pages/notification/noticeBoard/noticeBoard.jsx";
import CourseAnnouceDetail from "./pages/notification/courseAnnoucement/courseAnnouceDetail.jsx";
import CourseAnnoucement from "./pages/notification/courseAnnoucement/courseAnnoucement.jsx";
import NoticeBoardDetail from "./pages/notification/noticeBoard/noticeBoardDetail.jsx";
import Gradebook from "./pages/gradeBook/index.jsx";
import Overview from "./pages/overview/Overview.jsx";
import TotalCredit from "./pages/totalCredit/totalCredit.jsx";
import Time from "./pages/timetable/Time.jsx";
import Settings from "./pages/settings/settings.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" replace />
      },
      {
        path: "noti",
        element: <Notification />,
        children: [
          {
            index: true,
            element: <Navigate to="/noti/notice-board" replace />
          },
          {
            path: "notice-board/*",
            element: <NoticeBoard />,
          },
          {
            path: "notice-board/detail",
            element: <NoticeBoardDetail />
          },
          {
            path: "course-announcement/detail",
            element: <CourseAnnouceDetail />,
          },
          {
            path: "course-announcement",
            element: <CourseAnnoucement />,
          }
        ],
      },
      {
        path: "gradebook",
        element: <Gradebook />
      },
      {
        path:"timetable",
        element: <Time />
      },
      {
        path: "overview",
        element: <Overview />
      },
      {
        path:"overview/total-credit",
        element: <TotalCredit />
      },
      {
        path: "setting",
        element: <Settings />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={routers} />
  
);
