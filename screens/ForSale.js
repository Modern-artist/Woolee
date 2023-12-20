import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import JobCard from '../components/JobCard';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';


const ForSale = () => {
    const navigation = useNavigation();
    const { isLoggedIn, user } = useAuth();
    const [marketPlace, setMarketPlace] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchMarketplace = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/mystore', config);
                setMarketPlace(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching Marketplace:', error);
                setIsLoading(false)
            }
        };

        fetchMarketplace();
    }, []);

    return (<ScrollView style={{ padding: 20 }}>
        <View style={styles.inventoryCard} >
            <View style={styles.heading}>
                <Text style={styles.title}>Multicoloured Yarn</Text>
                <Feather name="edit" size={24} color="black" />
            </View>
            <Image
                style={{ borderRadius: 6, resizeMode: 'cover', width: '100%', height: 240 }}
                source={{ uri: 'https://images.unsplash.com/photo-1598871956222-26b66d6559fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvb2x8ZW58MHx8MHx8fDA%3D' }}
            />
            <Text style={styles.Price}>₹998/-  <Text style={styles.ofPrice}>₹998</Text></Text>

            <Text style={styles.subText}>Batch: #GT34YUIERWHFSJ</Text>
            <View style={styles.certDate}>
                <View style={styles.jobCard}>
                    {/* <Image></Image> */}
                    <Text style={styles.subText}>A Certified wool</Text>
                </View>
                {/* <Text style={styles.subText}>Production Date - 12hrs ago</Text> */}
            </View>
            <View style={styles.allCara}>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>6 Pieces</Text>
                    <Text style={styles.label}>Quantity</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Ultra Soft</Text>
                    <Text style={styles.label}>Softness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>23mm</Text>
                    <Text style={styles.label}>Thickness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Multicolour</Text>
                    <Text style={styles.label}>Colour</Text>
                </View>
                <View style={styles.seeBtn}>
                    <Text style={styles.seeText}> Add Stock </Text>
                    <MaterialIcons name="add-circle-outline" size={24} color="white" />
                </View>
            </View>
        </View>
        <View style={styles.inventoryCard} >
            <Text style={styles.title}>Supper soft Scarf</Text>
            <Image
                style={{ borderRadius: 6, resizeMode: 'cover', width: '100%', height: 240 }}
                source={{ uri: 'https://images.unsplash.com/photo-1572187092690-63fffd19feb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29vbHxlbnwwfHwwfHx8MA%3D%3D' }}
            />
            <Text style={styles.Price}>₹998/-  <Text style={styles.ofPrice}>₹998</Text></Text>

            <Text style={styles.subText}>Batch: #GT34YUIERWHFSJ</Text>
            <View style={styles.certDate}>
                <View style={styles.jobCard}>
                    {/* <Image></Image> */}
                    <Text style={styles.subText}>A Certified wool</Text>
                </View>
                {/* <Text style={styles.subText}>Production Date - 12hrs ago</Text> */}
            </View>
            <View style={styles.allCara}>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>4 Pieces</Text>
                    <Text style={styles.label}>Quantity</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Velvet</Text>
                    <Text style={styles.label}>Softness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>24mm</Text>
                    <Text style={styles.label}>Thickness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Yellow</Text>
                    <Text style={styles.label}>Colour</Text>
                </View>
                <View style={styles.seeBtn}>
                    <Text style={styles.seeText}> Add Stock </Text>
                    <MaterialIcons name="add-circle-outline" size={24} color="white" />
                </View>
            </View>
        </View>
        <View style={styles.inventoryCard} >
            <Text style={styles.title}>High neck Sweater</Text>
            <Image
                style={{ borderRadius: 6, resizeMode: 'cover', width: '100%', height: 240 }}
                source={{ uri: 'https://images.unsplash.com/photo-1611911813383-67769b37a149?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHx3b29sfGVufDB8fDB8fHww' }}
            />
            <Text style={styles.Price}>₹998/-  <Text style={styles.ofPrice}>₹998</Text></Text>
            <Text style={styles.subText}>Batch: #GT34YUIERWHFSJ</Text>
            <View style={styles.certDate}>
                <View style={styles.jobCard}>
                    {/* <Image></Image> */}
                    <Text style={styles.subText}>A Certified wool</Text>
                </View>
                {/* <Text style={styles.subText}>Production Date - 12hrs ago</Text> */}
            </View>
            <View style={styles.allCara}>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>4 Pieces</Text>
                    <Text style={styles.label}>Quantity</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Plush</Text>
                    <Text style={styles.label}>Softness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>32mm</Text>
                    <Text style={styles.label}>Thickness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Offwhite</Text>
                    <Text style={styles.label}>Colour</Text>
                </View>
                <View style={styles.seeBtn}>
                    <Text style={styles.seeText}> Add Stock </Text>
                    <MaterialIcons name="add-circle-outline" size={24} color="white" />
                </View>
            </View>
        </View>
        <View style={styles.inventoryCard} >
            <Text style={styles.title}>Hand made in Kashmir Decorators</Text>
            <Image
                style={{ borderRadius: 6, resizeMode: 'cover', width: '100%', height: 240 }}
                source={{ uri: 'https://images.unsplash.com/photo-1606987482245-560456106cc7?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            />
            <Text style={styles.Price}>₹998/-  <Text style={styles.ofPrice}>₹998</Text></Text>

            <Text style={styles.subText}>Batch: #GT34YUIERWHFSJ</Text>
            <View style={styles.certDate}>
                <View style={styles.jobCard}>
                    {/* <Image></Image> */}
                    <Text style={styles.subText}>A Certified wool</Text>
                </View>
                {/* <Text style={styles.subText}>Production Date - 12hrs ago</Text> */}
            </View>
            <View style={styles.allCara}>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>5 Pieces</Text>
                    <Text style={styles.label}>Quantity</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Ultra Soft</Text>
                    <Text style={styles.label}>Softness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>35mm</Text>
                    <Text style={styles.label}>Thickness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Black</Text>
                    <Text style={styles.label}>Colour</Text>
                </View>
                <View style={styles.seeBtn}>
                    <Text style={styles.seeText}> Add Stock </Text>
                    <MaterialIcons name="add-circle-outline" size={24} color="white" />
                </View>
            </View>
        </View>

    </ScrollView>
    )
}

export default ForSale

const styles = StyleSheet.create({

    inventoryCard: {
        display: 'flex',
        gap: 20,
        paddingVertical: 20,
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
    Price: {
        color: '#111111',
        fontSize: 24,
        fontWeight: '700',
    },
    ofPrice: {
        color: '#AAAAAA',

        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: "line-through"

    },
    certDate: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
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
    Btns: {
        flexDirection: 'row',
        gap: 12,


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
    CartBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        width: '48%',
        gap: 12,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 123,
        borderWidth: 2
    },
    seeCart: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
})