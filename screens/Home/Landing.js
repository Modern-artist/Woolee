import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native"
import JobCard from '../../components/JobCard';

const Landing = () => {
    const bannerImg = [
        require('../../assets/homeImgs/1.png'),
        require('../../assets/homeImgs/2.png'),
        require('../../assets/homeImgs/3.png'),
        require('../../assets/homeImgs/4.png'),
        require('../../assets/homeImgs/5.png'),
        require('../../assets/homeImgs/6.png'),
        require('../../assets/homeImgs/7.png'),
    ];
    return (
        <View>
            <ScrollView>
                <View style={{ paddingVertical: 16, width: '90%', }}>
                    <SliderBox
                        images={bannerImg}
                        autoPlay
                        circleLoop
                        dotColor="#141414"
                        ImageComponentStyle={{ width: '90%', margin: 'auto', borderRadius: 12, borderWidth: 2, borderColor: '#aaaaaa' }}
                        inactiveDotColor="#AAAAAA"
                    />
                </View>
                {/* <Text style={styles.title}>{isLoggedIn && user?.name}</Text>
                <Text style={styles.title}>{isLoggedIn && user?.role}</Text> */}
                {/* <Text style={styles.title}>{console.log(user.role !== "producer")}</Text> */}
                
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
            </ScrollView>
        </View>
    )
}

export default Landing

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