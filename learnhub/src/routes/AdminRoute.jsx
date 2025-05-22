import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { currentUser, isAdmin } = useAuth();

    // אם עדיין טוען – לא מציג כלום
    if (currentUser === undefined) return null;

    return currentUser && isAdmin ? children : <Navigate to="/landingpage" />;
};

export default AdminRoute;
