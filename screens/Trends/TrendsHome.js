import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewsCard from '../../components/NewsCard';

const TrendsHome = () => {
    const bannerImages = [
        require('../../assets/trends/8.png'),
        require('../../assets/trends/9.png'),
        require('../../assets/trends/10.png'),
        require('../../assets/trends/11.png'),
        require('../../assets/trends/12.png'),
        require('../../assets/trends/13.png'),
        require('../../assets/trends/14.png'),
        // Add more images as needed
    ];

    return (
        <View style={styles.contentContainer}>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>
                    Trending on Woolee
                    <MaterialCommunityIcons name="fire" size={32} color="#FC8A17" />
                </Text>

                <View>
                    <SliderBox
                        images={bannerImages}
                        autoPlay
                        circleLoop
                        dotColor="#141414"
                        ImageComponentStyle={{ width: '100%' }}
                        inactiveDotColor="#AAAAAA"
                    />
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111111',
        padding: 20,
    },
    content: {
        // paddingHorizontal: 20,
    },
});

export default TrendsHome;
