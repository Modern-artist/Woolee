import { StyleSheet, Text, View, SafeAreaView, TextInput,Pressable } from 'react-native'
import React from 'react'
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Search = () => {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View>
            <SafeAreaView>
                <View style={styles.row}>
                    {/* <Ionicons name="ios-chevron-back-outline" size={24} color="black" /> */}
                    {/* <Ionicons name="ios-chevron-back-outline" size={40} color="black" onPress={handleGoBack} /> */}
                    <View style={styles.searchBarContainer} >
                        <TextInput placeholder='Search' clearButtonMode='always' style={styles.searchBar}>
                        </TextInput>
                        <Ionicons name="search" size={30} color="#AAAAAA" />
                    </View>
                    <Pressable style={styles.goBack} onPress={handleGoBack}>
                    <Ionicons name="ios-chevron-back-outline" size={20} color="black"  />
                    <Text>Go back</Text>
                    </Pressable>

                </View>
                
            </SafeAreaView>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        alignItems: "center",


    },
    goBack: {
        display: 'flex',
        flexDirection: 'row',
        // margin: 20,
        alignItems: "center",


    },
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#AAAAAA',
        borderRadius: 8,
        paddingRight: 12,
        marginLeft:12,
        flex:1,



    },
    searchBar: {
        flex: 1,
        // width:'100%',

        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 12,
        paddingHorizontal: 12,

    },
})