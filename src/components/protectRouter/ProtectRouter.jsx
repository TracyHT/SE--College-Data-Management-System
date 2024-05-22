import { Navigate, useLocation, useOutletContext } from "react-router-dom";

const ProtectRouter = ({children}) => {
    const location = useLocation();
    const context = useOutletContext();
    if (!context.authentication) {
        return <Navigate to="/login" from={location} replace />;
    }
    return children;
}

export default ProtectRouter;