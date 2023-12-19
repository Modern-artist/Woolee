import { StyleSheet, Image, View, Pressable } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
    const navigation = useNavigation();

    const handleSearchPress = () => {
        navigation.navigate('Search');
    };
    const handleCartPress = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.navBar}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.navBarBtns}>
                <Pressable onPress={handleSearchPress}>
                    <Ionicons name="search" size={30} color="black" />
                </Pressable>
                <Pressable onPress={handleCartPress}>
                    <Feather name="shopping-bag" size={28} color="black" />
                </Pressable>
                <Pressable>
                    {/* <FontAwesome5 name="bookmark" size={26} color="black" /> */}
                    <MaterialCommunityIcons name="bookmark-multiple-outline" size={28} color="black" />

                </Pressable>
            </View>
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        // marginBottom: 20,
    },
    navBar: {
        backgroundColor: '#F2F2F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        paddingTop:60,
        borderBottomWidth: 1,
        borderBlockColor: '#d0d0d0',
    },
    navBarBtns: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
    },
});
