import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import SetupShop from '../screens/SetupShop';
import Shop from '../screens/Shop';
import Profile from '../screens/Profile';
import Services from '../screens/Services';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Article from '../screens/Trends/Article';
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';
import NewsTrends from '../screens/NewsTrends';

const StackNavigation = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        const navigation = useNavigation();
        const [user, setUser] = useState({});
        useEffect(() => {
            async function getUser() {
                try {
                    const userData = await AsyncStorage.getItem('user');
                    if (userData) {
                        // Parse the JSON string to get the user object
                        const parsedUserData = JSON.parse(userData);
                        setUser(parsedUserData);
                    }
                    else if (!userData) {
                        navigation.navigate("Login");
                    }
                } catch (error) {
                    console.error('Error retrieving user data from AsyncStorage:', error);
                }
            }

            getUser();
        }, []);
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
                    component={Shop}
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
                    name='Trends'
                    component={NewsTrends}
                    options={{
                        tabBarLabel: "Trends", // Set the label using tabBarLabel
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Octicons
                                name='graph'
                                size={24}
                                color={focused ? '#111111' : '#AAAAAA'}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='Services'
                    component={Services}
                    options={{
                        tabBarLabel: "Services", // Set the label using tabBarLabel
                        tabBarLabelStyle: ({ focused }) => ({
                            color: focused ? '#111111' : '#AAAAAA',
                            fontWeight: focused ? 'bold' : 'normal',
                        }),
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons
                                name='cleaning-services'
                                size={24}
                                color={focused ? '#111111' : '#AAAAAA'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarLabel: "Profile", // Set the label using tabBarLabel
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
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Shop' component={Shop} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SetupShop' component={SetupShop} options={{ headerShown: false }} />
                <Stack.Screen name='NewsTrends' component={NewsTrends} options={{ headerShown: false }} />
                <Stack.Screen name='Article' component={Article} options={{ headerShown: false }} />
                <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
                <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default StackNavigation;

const styles = StyleSheet.create({});
