import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
const NewsCard = () => {

    const handlePress1 = () => {
        console.log('Pressable 1 pressed!');
        // Add any other actions you want to perform on Pressable 1 press
    };

    const handlePress2 = () => {
        console.log('Pressable 2 pressed!');
        // Add any other actions you want to perform on Pressable 2 press
    };

    return (
        <Pressable style={styles.newsCard}
        
            onPress={handlePress1}>
            <View style={styles.authDetail}>
                <View style={styles.authDes}>
                    {/* <Image ></Image> */}
                    <AntDesign name="taobao-circle" size={24} color="black" />
                    <Text style={styles.authName}>Ministry of Textile</Text>
                </View>
                <Text style={styles.postDate} >Aug 9</Text>
            </View>
            <Text style={styles.newsTitle} >Improving Wool Farming</Text>
            <View style={styles.newsBioImg}  >
                <Text style={styles.newsBio} numberOfLines={3} ellipsizeMode="tail">A Comprehensive Overview and Educational Resource for Farmers Overview </Text>
                <Image
                    width={120}
                    height={80}
                    style={{ borderRadius: 6, resizeMode: 'cover' }}

                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }} />
            </View>
            <View style={styles.bottomInfo}>
                <Text style={styles.readingTime}>12 min read</Text>
                <View style={styles.bottomBtns}>
                <Pressable onPress={handlePress2} >
                    <FontAwesome5 name="bookmark" size={24} color="black" />
                </Pressable>
                <Pressable onPress={handlePress2} >
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    newsCard: {
        width:'100%',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
    },
    authDetail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    authDes: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    authName: {
        fontSize: 16,
        fontWeight: '600'

    },
    postDate: {
        color: "#AAAAAA"

    },
    newsTitle: {
        fontSize: 20,
        fontWeight: 'bold'
        
    },

    newsBioImg: {
        // backgroundColor:'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    newsBio: {
        fontSize: 16,
        fontWeight: '500',
        color: '#141414',
        width:'60%'

    },
    bottomInfo: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    bottomInfo: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    
    readingTime: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AAAAAA',
    },
    bottomBtns: {
        display: 'flex',
        flexDirection: 'row',
        gap:20

    },

})