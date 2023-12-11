import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import certifiedLogo from '../assets/g8.png';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import JobCard from '../components/JobCard';
import NavBar from '../components/NavBar';


const HomeScreen = () => {

    const bannerImg = ["https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1586459289542-1f0d20bd437e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNoZWVwfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1661844303796-09809cc8b5ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNoZWVwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1627730433054-9ccb05ef8c6a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    return (
        <SafeAreaView>
            <NavBar/>
            {/* <View style={styles.navBar}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.navBarBtns}>
                    <Pressable>
                        <Ionicons name="search" size={28} color="black" />
                    </Pressable>
                    <Pressable>
                        <Feather name="shopping-bag" size={28} color="black" />
                    </Pressable>
                    <Pressable>
                        <MaterialIcons name="favorite-outline" size={28} color="black" />
                    </Pressable>
                </View>
            </View> */}
            
            <ScrollView>
                <View style={{ paddingVertical: 20 }}>
                    <SliderBox images={bannerImg} autoPlay circleLoop dotColor={"#141414"} inactiveDotColor={"#AAAAAA"} ImageComponentStyle={{ width: "90%", borderRadius:12 }}></SliderBox>
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
    // logo: {
    //     width: 40,
    //     height: 40,
    //     // marginBottom: 20,
    // },
    // navBar: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     padding: 20,
    //     borderBottomWidth: 1,
    //     borderBlockColor: '#d0d0d0'
    //     // backgroundColor:'red'
    // },
    // navBarBtns: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: 20,
    //     flexDirection: 'row',
    // },

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
        gap: 20,
        flexDirection: 'row',
    },
    catBox: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderColor: '#AAAAAA',
        borderWidth: 2,

    },
})