import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        token: "",
    });
axios.defaults.baseURL='http://192.168.1.6:8080/api/v1'
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

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
