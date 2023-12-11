import { StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import NewsCard from '../../components/NewsCard'
import { SliderBox } from "react-native-image-slider-box";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TrendsHome = () => {
    // const { width: screenWidth } = Dimensions.get('window');

    const bannerImg = ["https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1586459289542-1f0d20bd437e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNoZWVwfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1661844303796-09809cc8b5ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNoZWVwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1627730433054-9ccb05ef8c6a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    return (
        <View style={styles.contentContainer}>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>Trending on Woole<MaterialCommunityIcons name="fire" size={32} color="#FC8A17" /></Text>

                <View >
                    <SliderBox images={bannerImg} autoPlay circleLoop dotColor={"#141414"} ImageComponentStyle={{ width: '100%', }} inactiveDotColor={"#AAAAAA"} ></SliderBox>
                </View>
                <View style={{ paddingHorizontal: 20, }}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                </View>
            </ScrollView>
        </View>
    )
}

export default TrendsHome

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    title:{

        fontSize: 24,
        fontWeight:'bold',
        color:'#111111',
        padding:20,

    },
    content: {
        // paddingHorizontal: 20,
    },
})