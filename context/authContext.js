import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContext } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    // const navigation = useContext(NavigationContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getStoredUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('wuser');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error retrieving user from AsyncStorage:', error);
            }
        };

        getStoredUser();
    }, []);

    const login = async (userData) => {
        try {
            await AsyncStorage.setItem('wuser', JSON.stringify(userData));
            console.log(userData)
            setUser(userData);
            setIsLoggedIn(true); 
            navigation.navigate("Main");

        } catch (error) {
            console.error('Error storing user in AsyncStorage:', error);
        }
    };

    const logout = async () => {
        console.log('entered logout')
        try {
            await AsyncStorage.removeItem('wuser');
            setUser(null);
            setIsLoggedIn(false);
            navigation.navigate("Login")
            console.log('done logout')
        } catch (error) {
            console.error('Error removing user from AsyncStorage:', error);
            console.log('failed logout')
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
