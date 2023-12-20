import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import certifiedLogo from '../assets/g8.png';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const JobCard = ({ product }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate("Product", { product })} style={styles.jobCard}>
            <Text style={styles.title}>{product.batch.type}</Text>
            <View style={styles.subInfo}>
                <View style={styles.subCert}>
                    <Image source={certifiedLogo} style={styles.certifiedLogo}></Image>
                    <Text style={styles.subTitle}>A+ Certified</Text>
                </View>
                <View style={styles.subCert}>
                    <MaterialIcons name="date-range" size={24} color="#AAAAAA" />
                    <Text style={styles.subTitle}>{product.batch.production_date}</Text>
                </View>
                
            </View>
            <View style={styles.Detail}>
                <View>
                    <View style={styles.subDetail}><FontAwesome name="inr" size={20} color="black" /><Text style={styles.detailVal}>{product.price}/kg</Text></View>
                    <Text style={styles.detailLabel}>Price</Text>
                </View>
                <View>
                    <View style={styles.subDetail}><FontAwesome name="user-secret" size={24} color="black" /><Text style={styles.detailVal}>{product.producer.farm_name}</Text></View>
                    <Text style={styles.detailLabel}>Verified Seller</Text>
                </View>
            </View>
            <Text style={styles.cardBio}>Origin: Originally from Spain, but also bred in India.
                Characteristics: Soft, fine, and luxurious. Known for its excellent warmth and moisture-wicking properties.</Text>
            <View style={styles.seeBtn}>
                <Text style={styles.seeText}>See More</Text>
                <Feather name="arrow-right-circle" size={24} color="white" />
            </View>
        </Pressable>
    )
}

export default JobCard

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
    cardBio: {
        fontSize: 16,
        fontWeight: '500',
        color: '#141414',
    },
    seeBtn: {
        flexDirection:'row',
        justifyContent:'center',
        display: 'flex',
        width: '100%',
        gap:12,
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