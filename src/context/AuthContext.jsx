import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: '',
    });
    const navigate = useNavigate();

    function login(email) {
        console.log('user is logged in!');
        toggleIsAuth( {
            isAuth: true,
            user: email,
        });
        navigate('./profile');
    }

    function logout() {
        console.log('user is logged out!');
        toggleIsAuth( {
            isAuth: false,
            user: '',
        });
        navigate('./');
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;