import { StyleSheet, Text, View, SafeAreaView,} from 'react-native'
import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrendsHome from '../screens/Trends/TrendsHome'
import EduTab from '../screens/Trends/EduTab'
import Farming from '../screens/Trends/Farming'
import Video from './Trends/Video';
import Landing from './Home/Landing';

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontWeight: '600' },
                tabStyle: { width: 'auto' },
                style: { backgroundColor: 'transparent', },
                indicatorStyle: { backgroundColor: '#3498db', },
                scrollEnabled: true,
            }}>
            <Tab.Screen name="For you" component={Landing} />
            <Tab.Screen name="Raw wool" component={EduTab} />
            {/* <Tab.Screen name="Article" component={Article} /> */}
            <Tab.Screen name="Processed Wool" component={Farming} />
            <Tab.Screen name="Woolen Items" component={Video} />
        </Tab.Navigator>
    );
}
const HomeScreen = () => {
    // const navigation = useNavigation();
    // const { isLoggedIn, user } = useAuth();
    // const [marketPlace, setMarketPlace] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    //    const bannerImg = [
    //     require('../assets/homeImgs/1.png'),
    //     require('../assets/homeImgs/2.png'),
    //     require('../assets/homeImgs/3.png'),
    //     require('../assets/homeImgs/4.png'),
    //     require('../assets/homeImgs/5.png'),
    //     require('../assets/homeImgs/6.png'),
    //     require('../assets/homeImgs/7.png'),
    // ];
    return (
        <SafeAreaView style={styles.container}>
            {/* <StackNavigation /> */}
            <NavBar/>
            <MyTabs/>
            {/* <ScrollView>
                <View style={{paddingVertical:16,width:'90%',}}>
                    <SliderBox
                        images={bannerImg}
                        autoPlay
                        circleLoop
                        dotColor="#141414"
                        ImageComponentStyle={{ width: '90%', margin: 'auto', borderRadius: 12,borderWidth:2,borderColor:'#aaaaaa' }}
                        inactiveDotColor="#AAAAAA"
                    />
                </View>
                <Text style={styles.title}>{isLoggedIn && user?.name}</Text>
                <Text style={styles.title}>{isLoggedIn && user?.role}</Text> */}
                {/* <Text style={styles.title}>{console.log(user.role !== "producer")}</Text> */}
                {/* <View style={styles.catContainer}>
                    <Pressable>
                        <Ionicons name="filter" size={24} color="black" />
                    </Pressable>
                    <Pressable>
                        <Text style={styles.categoryText}>All</Text>
                    </Pressable>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.allCategories}>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 1</Text>
                            </Pressable>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 2</Text>
                            </Pressable>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 3</Text>
                            </Pressable>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 4</Text>
                            </Pressable>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 5</Text>
                            </Pressable>
                            <Pressable style={styles.catBox}>
                                <Text style={styles.categoryText}>category 6</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View> */}
                {/* <ShopStack/> */}
                {/* {marketPlace.map((product) => (
                    <JobCard
                        key={product.id}
                        product={product}
                        onPress={() => navigation.navigate("Product", { product })}
                    />
                ))} */}
                {/* <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard /> */}
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    catContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
        padding: 20,
        paddingRight: 0,
        borderBottomWidth: 2,
        borderBlockColor: '#d7d7d7'
    },
    allCategories: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
    },
    catBox: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 60,
        borderColor: '#AAAAAA',
        borderWidth: 2,

    },
})