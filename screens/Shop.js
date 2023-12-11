import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForSale from '../screens/ForSale';
import Sold from '../screens/Sold';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 16, fontWeight: '600' },
            style: { backgroundColor: 'transparent' }, // Change the background color of the tab bar
            // indicatorStyle: { backgroundColor: '#000' },
        }}>
            <Tab.Screen name="For Sale" component={ForSale} />
            <Tab.Screen name="Sold" component={Sold} />
        </Tab.Navigator>
    );
}

const Shop = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <MyTabs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Shop;
