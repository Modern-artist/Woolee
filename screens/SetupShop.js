import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';

const SetupShop = () => {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center',justifyContent:'center' }}>
            <View>
                <LottieView style={{ width: 300, height: 300 }} source={require('../SetupShopAnimation.json')} autoPlay loop />
            </View>
            <Pressable style={{
                marginVertical: 40,
                display: 'flex',
                backgroundColor: '#111111',
                paddingVertical: 16,
                paddingHorizontal: 32,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 34,
                gap: 12,
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontSize: 18,
                    color: '#ffffff',
                    fontWeight: '600',
                }} >Create a Woolee Shop</Text>
                <Feather name="arrow-right-circle" size={24} color="white" />
            </Pressable>
            
            
        </SafeAreaView>
    )
}

export default SetupShop

const styles = StyleSheet.create({
    pros:{
        height:100,
        width:100,
        borderRadius:12,
        backgroundColor:'#E9E9E9',
        display:'flex',
        gap:8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    }
})