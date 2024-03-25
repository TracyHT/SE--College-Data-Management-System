import { Route,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/auth/login";

const router =createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/login" element={<Login />}  />
      </Route>
    )
  )
export default router;