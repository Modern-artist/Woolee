import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CartCard from '../components/CartCard';
import NavBar from '../components/NavBar';


const FixedPositionView = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* <NavBar/> */}
            <View style={styles.nav}>
                <Text style={styles.Head}>Your Cart</Text>
                <Pressable style={styles.goBack} onPress={handleGoBack}>
                    <Ionicons name="ios-chevron-back-outline" size={20} color="black" />
                    <Text>Go back</Text>
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    


                    {/* Your other components */}
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />

                    {/* Fixed position view */}
                </View>
            </ScrollView>
            <View style={styles.fixedView}>

                <View style={styles.contain}>
                    <View style={styles.info}>
                        <Text style={styles.SubTotal}>SubTotal</Text>
                        <Text style={styles.SubVal}>₹ 61942/-</Text>
                    </View>
                    <Pressable style={styles.seeBtn}>

                        <Text style={styles.seeText}>Checkout Now</Text>
                        <Feather name="arrow-up-right" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        // padding: 20,
        position: 'relative',
        paddingBottom:124,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:2,
        borderColor:'#e7e7e7',
        justifyContent: 'space-between'
    },
    Head: {
        fontSize: 24,
        paddingLeft: 20,
        fontWeight: '600'
    },
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    fixedView: {
        position: 'absolute',
        width: '100%',
        bottom: 0, // Adjust as needed
        left: 0, // Adjust as needed
        padding: 20,
        zIndex: 1, // Ensure the fixed view is above other components
    },
    contain: {
        width: '100%',
        gap: 20,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderColor: '#e7e7e7',
        borderWidth: 2,
        padding: 20,
        borderRadius: 20,
        zIndex: 1, // Ensure the fixed view is above other components
    },
    info: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    SubTotal: {
        fontSize: 20,
        fontWeight: "600",
    },
    SubVal: {
        fontSize: 24,
        fontWeight: "bold",
    },
    seeBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        width: '100%',
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
});

export default FixedPositionView;
