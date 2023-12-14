import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

import certifiedLogo from '../assets/g8.png';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
const CartCard = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Add product to cart logic
    };

    const updateQuantity = (value) => {
        setQuantity(quantity + value);
    };
    return (
        <View style={styles.jobCard}>
            <Text style={styles.title}>Pashmina Wool (Cashmere)</Text>
            <View style={styles.subInfo}>
                <View style={styles.subCert}>
                    <Image source={certifiedLogo} style={styles.certifiedLogo}></Image>
                    <Text style={styles.subTitle}>A+ Certified</Text>
                </View>
                <Text style={styles.subTitle}>Posted - 12hrs ago</Text>
            </View>
            <View style={styles.Detail}>
                <View>
                    <View style={styles.subDetail}><FontAwesome name="inr" size={20} color="black" /><Text style={styles.detailVal}>1923/kg</Text></View>
                    <Text style={styles.detailLabel}>Price</Text>
                </View>
                <View>
                    <View style={styles.subDetail}><FontAwesome name="user-secret" size={24} color="black" /><Text style={styles.detailVal}>Arjun Ready</Text></View>
                    <Text style={styles.detailLabel}>Verified Seller</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.proPrice}>₹ 7134/-</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <AntDesign onPress={() => updateQuantity(-1)} name="minuscircleo" size={32} color="black" disabled={quantity === 1} />
                    <View style={styles.Weight}><Text style={styles.quantity}>{quantity} Kg</Text></View>

                    <Ionicons onPress={() => updateQuantity(1)} name="add-circle-sharp" size={40} color="black" />
                </View>
            </View>
        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({

    jobCard: {
        padding: 20,
        paddingVertical: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        borderBottomWidth: 2,
        borderBlockColor: '#d7d7d7'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subInfo: {
        alignItems: 'center',
        display: 'flex',
        // justifyContent:'space-between',
        flexDirection: 'row',
        gap: 40,
    },
    subCert: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 12
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#AAAAAA',
    },
    certifiedLogo: {
        height: 24,
        width: 24,
        opacity: .5
    },

    Detail: {
        // backgroundColor: 'red',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        rowGap: 12,
        flexDirection: 'row',
        // paddingVertical: 12,
        alignItems: 'center',
    },
    subDetail: {
        // backgroundColor: 'red',
        display: 'flex',
        gap: 4,
        flexDirection: 'row',
        // paddingVertical: 12,
        alignItems: 'center',
    },
    detailLabel: {
        paddingTop: 8,
        fontSize: 18,
        fontWeight: '600',
        color: '#AAAAAA',
    },
    detailVal: {
        fontSize: 20,
        fontWeight: '700',
        color: '#141414',
    },
    proPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#141414',
    },
    Weight: {
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        borderRadius: 40,
        // paddingHorizontal: 40,
        width:100,
        alignItems: 'center',
        fontSize: 16,
        paddingVertical: 8,
        fontWeight: 'bold',
    },
    quantity: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

})