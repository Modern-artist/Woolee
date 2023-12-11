import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react'
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
      <View style={styles.navBar}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.navBarBtns}>
              <Pressable>
                  <Ionicons name="search" size={28} color="black" />
              </Pressable>
              <Pressable>
                  <Feather name="shopping-bag" size={28} color="black" />
              </Pressable>
              <Pressable>
                  <MaterialIcons name="favorite-outline" size={28} color="black" />
              </Pressable>
          </View>
      </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        // marginBottom: 20,
    },
    navBar: {
        // backgroundColor:'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBlockColor: '#d0d0d0'
        // backgroundColor:'red'
    },
    navBarBtns: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
    },
})