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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && isTokenValid(token)) {
            void login(token);
        } else {
            setAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            })
        }
    }, []);


    const navigate = useNavigate();

    async function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);

        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response.data);
            setAuth( {
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });
        } catch(e) {
            console.error(e);
            logout();
        }
        console.log('user is logged in!');
        navigate('./profile');
    }

    function logout() {
        setAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('user is logged out!');
        navigate('./');
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