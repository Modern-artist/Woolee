import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForSale from '../screens/ForSale';
import Sold from '../screens/Sold';
import TrendsHome from '../screens/Trends/TrendsHome'
import EduTab from '../screens/Trends/EduTab'
import Farming from '../screens/Trends/Farming'
import NavBar from '../components/NavBar';
import Article from './Trends/Article';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontWeight: '600' },
                tabStyle: { width: 'auto' },
                style: { backgroundColor: 'transparent', },
                indicatorStyle: { backgroundColor: '#3498db',},
                scrollEnabled: true, 
            }}>
            <Tab.Screen name="Trending" component={TrendsHome} />
            <Tab.Screen name="Educational" component={EduTab} />
            {/* <Tab.Screen name="Article" component={Article} /> */}
            <Tab.Screen name="Farming" component={Farming} />
        </Tab.Navigator>
    );
}

const NewsTrends = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
                <MyTabs />
            {/* <View style={styles.contentContainer}>
                <ScrollView style={styles.content}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </ScrollView>
            </View> */}
        </SafeAreaView>  
    );
};

export default NewsTrends;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        padding: 40,
        // marginTop: 10, 
    },
});
