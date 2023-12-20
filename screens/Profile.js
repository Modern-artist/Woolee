import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import NavBar from '../components/NavBar';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';


const Profile = () => {
    const navigation = useNavigation();
    const { logout } = useAuth()

    return (
        <SafeAreaView >
            <NavBar />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.profileDetail}>
                        <View style={styles.photo}>
                            <Image
                                width={120}
                                height={120}
                                style={{ borderRadius: 60, resizeMode: 'cover' }}

                                source={{
                                    uri: 'https://images.unsplash.com/photo-1641155785005-592529a4391d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                }} />
                        </View>
                    </View>
                    <Text style={styles.name}>Gitanjali Vijay Singh</Text>
                    <View style={styles.infoContainer}><Text style={styles.since}>Member since 2019</Text></View>
                    <View style={styles.optionsContainer}>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <Feather name="user" size={24} color="black" />
                                <Text style={styles.optionName}>Your Profile</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <MaterialIcons name="payment" size={24} color="black" />
                                <Text style={styles.optionName}>Payment Methods</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                                <Text style={styles.optionName}>Favourite</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <AntDesign name="setting" size={24} color="black" />
                                <Text style={styles.optionName}>Settings</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <MaterialIcons name="history" size={24} color="black" />
                                <Text style={styles.optionName}>Payment Histroy</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <Feather name="help-circle" size={24} color="black" />
                                <Text style={styles.optionName}>Help Center</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <MaterialIcons name="security" size={24} color="black" />
                                <Text style={styles.optionName}>Privacy Policy</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                        <Pressable onPress={logout} style={styles.optionPressable}>
                            <View style={styles.optionIconName}>
                                <Feather name="log-out" size={24} color="black" />
                                <Text style={styles.optionName} onPress={logout}>Logout</Text>
                            </View>
                            <AntDesign name="right" size={24} color="#AAAAAA" />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
    },
    profileDetail: {
        paddingTop: 20,
    },
    photo: {
        padding: 8,
        borderWidth: 4,
        borderRadius: 213,
        borderColor: '#DEDEDE'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    since: {
        color: '#AAAAAA'

    },
    optionsContainer: {
        display: 'flex',
        // backgroundColor:'red',
        width: "100%",
        flexDirection: 'column',
        paddingBottom: 120
    },
    optionPressable: {
        // backgroundColor:'red',
        justifyContent: 'space-between',
        // width: '100%',
        paddingVertical: 20,
        borderBottomColor: '#E7E7E7',
        borderBottomWidth: 2,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 8,
        flexDirection: 'row',
        gap: 12,
    },
    optionName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#141414'
    },
    optionIconName: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
    },




})