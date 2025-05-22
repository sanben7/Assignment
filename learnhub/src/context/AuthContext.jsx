import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
            setUserData(null);
            setIsAdmin(false);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    setCurrentUser(user);

                    // שליפת role מ־Firestore
                    const userRef = doc(db, "users", user.uid);
                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {
                        const userData = userSnap.data();
                        setUserData(userData);
                        setIsAdmin(userData.role === "admin");
                    } else {
                        setUserData(null);
                        setIsAdmin(false);
                    }
                } else {
                    setCurrentUser(null);
                    setUserData(null);
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setCurrentUser(null);
                setUserData(null);
                setIsAdmin(false);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return null; // or a loading spinner
    }

    return (
        <AuthContext.Provider value={{ currentUser, isAdmin, userData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};