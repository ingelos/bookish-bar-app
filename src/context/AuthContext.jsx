import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid.js";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && isTokenValid(token)) {
            void login(token);
        } else {
            setAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);


    async function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.sub);

        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response);
            setAuth( {
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });
            console.log('user is logged in!');
        } catch(e) {
            console.error(e);
            logout();
        }
    }

    function logout() {
        localStorage.clear();
        setAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('user is logged out!');
        navigate('/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;