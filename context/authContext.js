import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const getStoredUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('wuser');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error('Error getting stored user:', error);
            return null;
        }
    };

    useEffect(() => {
        const loadStoredUser = async () => {
            const storedUser = await getStoredUser();
            if (storedUser) {
                setIsLoggedIn(true);
                setUser(storedUser);
            }
        };

        loadStoredUser();
    }, []);

    const login = async (userData) => {
        try {
            await AsyncStorage.setItem('wuser', JSON.stringify(userData));
            setUser(userData);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('wuser');
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error removing user data:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
