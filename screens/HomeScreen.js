import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import certifiedLogo from '../assets/g8.png';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import JobCard from '../components/JobCard';
import NavBar from '../components/NavBar';
import ShopStack from '../navigation/ShopStack';


const HomeScreen = () => {

       const bannerImg = [
        require('../assets/homeImgs/1.png'),
        require('../assets/homeImgs/2.png'),
        require('../assets/homeImgs/3.png'),
        require('../assets/homeImgs/4.png'),
        require('../assets/homeImgs/5.png'),
        require('../assets/homeImgs/6.png'),
        require('../assets/homeImgs/7.png'),
    ];
    return (
        <SafeAreaView>
            <NavBar/>
            <ScrollView>
                <View style={{paddingVertical:16,width:'90%',}}>
                    <SliderBox
                        images={bannerImg}
                        autoPlay
                        circleLoop
                        dotColor="#141414"
                        ImageComponentStyle={{ width: '90%', margin: 'auto', borderRadius: '12',borderWidth:2,borderColor:'#aaaaaa' }}
                        inactiveDotColor="#AAAAAA"
                    />
                </View>

                <View style={styles.catContainer}>
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
                </View>
                {/* <ShopStack/> */}
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
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