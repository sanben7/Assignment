import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    // אם עדיין טוען – לא מציג כלום
    if (currentUser === undefined) return null;

    return currentUser ? children : <Navigate to="/landingpage" />;
};

export default PrivateRoute;
