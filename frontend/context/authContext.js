import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const loadLocalStorage = async () => {
            let data = await AsyncStorage.getItem("@auth");
            if (data) {
                let loginData = JSON.parse(data);
                setState({ user: loginData?.user || null, token: loginData?.token || "" });
            }
        };
        loadLocalStorage();
    }, []);

    let token =state &&state.token
    axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
    axios.defaults.baseURL='http://192.168.1.7:8080/api/v1'
   

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
