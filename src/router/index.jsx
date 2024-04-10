import { Route,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/auth/login";
import Notification from "../pages/notification/notification";
import Settings from "../pages/settings/settings"

const router =createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/login" element={<Login />}  />
          <Route path="/noti" element={<Notification />}  />
          <Route path="/settings" element={<Settings />}  />
      </Route>
    )
  )
export default router;