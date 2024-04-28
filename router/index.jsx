import { Route,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/auth/login";
import Overview from "../pages/site/Overview";
import DetailsNotification from "../pages/notification/DetailsNotification";
import Notification from "../pages/notification";
import NoticeBoard from "../pages/notification/NoticeBoard";
import NoticeBoardDetails from "../pages/notification/notice-board-detail";
import Gradebook from "../pages/Gradebook";

const router =createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Overview/>}  />
          <Route path="login" element={<Login />}  />
          <Route path="notification" element={<Notification/>} />
          <Route path="notification/:slug"  element={<DetailsNotification/>} />
          <Route path="notification/notice-board"  element={<NoticeBoard/>} />
          <Route path="notification/notice-board/:slug"  element={<NoticeBoardDetails/>} />
          <Route path="gradebook"  element={<Gradebook/>} />
      </Route>
    )
  )
export default router;