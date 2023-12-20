import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native"
import JobCard from '../../components/JobCard';
import axios from 'axios';

const Landing = () => {
    const [isLoading, setIsLoading] = useState(false)
    // const [allWool, setAllWool] = useState([])
    const [rawWool, setRawWool] = useState([])
    const [processedWool, setProcessedWool] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const fetchMarketplace = async () => {
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/market');
                // setAllWool(response.data.data)
                setRawWool(response.data.data.raw_wool)
                console.log(response.data.data.raw_wool)
                setProcessedWool(response.data.data.processed_wool)
                console.log(response.data.data.processed_wool)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching Marketplace:', error);
                setIsLoading(false)
            }
        };

        fetchMarketplace();
    }, []);
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
                <View style={styles.Container}>
                    {rawWool.map((product) => (
                        <View style={styles.inventoryCard} >
                            <Text style={styles.title}>{product.batch.type}</Text>
                            <Text style={styles.subText}>Batch: {product.batch.qr_code}</Text>
                            <View style={styles.certDate}>
                                <View style={styles.jobCard}>
                                    {/* <Image></Image> */}
                                    <Text style={styles.subText}>A+ Certified</Text>
                                </View>
                                {/* <Text style={styles.subText}>Production Date - 12hrs ago</Text> */}
                            </View>
                            <View style={styles.allCara}>
                                <View style={styles.valueLabel}>
                                    <Text style={styles.value}>{product.batch.quantity} Kg</Text>
                                    <Text style={styles.label}>Quantity</Text>
                                </View>
                                <View style={styles.valueLabel}>
                                    <Text style={styles.value}>{product.batch.softness}</Text>
                                    <Text style={styles.label}>Softness</Text>
                                </View>
                                <View style={styles.valueLabel}>
                                    <Text style={styles.value}>{product.batch.thickness} mm</Text>
                                    <Text style={styles.label}>Thickness</Text>
                                </View>
                                <View style={styles.valueLabel}>
                                    <Text style={styles.value}>{product.batch.color}</Text>
                                    <Text style={styles.label}>Colour</Text>
                                </View>
                            </View>
                            <View style={styles.seeBtn}>
                                <Text style={styles.seeText}>See More</Text>
                                <Feather name="arrow-right-circle" size={24} color="white" />
                            </View>
                        </View>

                    ))}
                </View>
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
    Container: {
        display: 'flex',
        // flexDirection:'row-reverse',
        flex: 1,
        gap: 20,
        padding: 20,
        paddingHorizontal: 0,
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
    inventoryCard: {
        display: 'flex',
        gap: 20,
        padding: 20,
        borderBottomColor: "#e7e7e7",
        borderBottomWidth: 2
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: '#888888',
        fontSize: 16,
        fontWeight: '500'

    },
    certDate: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    allCara: {
        display: 'flex',
        // width: '100%',
        flexDirection: 'row',
        gap: 20,
        rowGap: 20,
        flexWrap: 'wrap',
        // justifyContent: 'space-between'
    },
    valueLabel: {
        backgroundColor: '#E7E7E7',
        padding: 20,
        borderRadius: 12,
    },
    value: {
        // color: '#AAAAAA',
        fontWeight: 'bold',
        fontSize: 18,
    },
    label: {
        color: '#888888',
    },
    seeBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        gap: 12,
        paddingVertical: 12,
        backgroundColor: '#111111',
        alignItems: 'center',
        borderRadius: 123,
    },
    seeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

})