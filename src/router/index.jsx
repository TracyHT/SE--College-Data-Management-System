import { Route,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/auth/login";
import Notification from "../pages/notification/notification";
import Time from "../pages/timetable/Time";

const router =createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/login" element={<Login />}  />
          <Route path="/noti/*" element={<Notification />}  />
          <Route path="/timetable" element = {<Time />}  />
      </Route>
    )
  )
export default router;