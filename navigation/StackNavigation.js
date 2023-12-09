import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import SetupShop from '../screens/SetupShop';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const StackNavigation = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Feather name='home' size={24} color={focused ? '#111111' : '#AAAAAA'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Shop'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Shop", // Set the label using tabBarLabel
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons
                                name='storefront'
                                size={24}
                                color={focused ? '#111111' : '#AAAAAA'}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='Market'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Market", // Set the label using tabBarLabel
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name='send'
                                size={24}
                                color={focused ? '#111111' : '#AAAAAA'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Shop", // Set the label using tabBarLabel
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name='user'
                                size={24}
                                color={focused ? '#111111' : '#AAAAAA'}
                            />
                        ),
                    }}
                />
                {/* Add options for other tab screens */}
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='SetupShop' component={SetupShop} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;

const styles = StyleSheet.create({});
