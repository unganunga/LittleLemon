import { useState, createContext, useEffect, Children } from "react";
import { LoginAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const   AuthContext = createContext();

function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const User = localStorage.getItem("user");
        const Token = localStorage.getItem("token");

        if(User && Token) {
            setUser(User);
            setToken(Token);
        }
        setIsReady(true);
    }, []);

    async function login(username, password) {
        console.log("login called");
        await LoginAPI(username, password).then(resp => {
            if(resp) {
                localStorage.setItem("token", resp.token);
                localStorage.setItem("user", username);
                setToken(resp.token);
                setUser(username);
                toast.success("Login Successful")
                navigate("/staff")
            }
        }).catch((e) => {
            toast.warning("Server error occured")
            console.log(e)
        })
    };

    const isLoggedIn = () => { return !!user}

    function logout() {
        setUser(null)
        setToken(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/")
    };

    const value = {
        login,
        isLoggedIn,
        logout,
        user,
        token,
    };

    return <AuthContext.Provider value={value}>
        {isReady ? children : null}
    </AuthContext.Provider>;
}

export { AuthContext, AuthProvider };