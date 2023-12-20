import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

const ShearingInfo = () => {
  return (
    <View>
          <View style={styles.authDetail}>
              <View style={styles.authDes}>
                  <AntDesign name="taobao-circle" size={24} color="black" />
                  <Text style={styles.authName}>article author</Text>
              </View>
              <Text style={styles.postDate}> article date </Text>
          </View>
          <Text style={styles.newsTitle}> article title</Text>
          <View style={styles.newsBioImg}>
              <Text style={styles.newsBio} numberOfLines={3} ellipsizeMode="tail">
                  article content substring0, 150
              </Text>
              {/* <Image
                  style={{ borderRadius: 6, resizeMode: 'cover', width: 120, height: 80 }}
                  source={{ uri: article.imageUri }}
              /> */}
          </View>
          <View style={styles.bottomInfo}>
              <Text style={styles.readingTime}> article readTime </Text>
              <View style={styles.bottomBtns}>
                  {/* <Pressable onPress={() => navigation.navigate("Article", { article })}>
                      <FontAwesome5 name="bookmark" size={24} color="black" />
                  </Pressable> */}
                  <Pressable onPress={() => { /* Add your action for the vertical dots button */ }}>
                      <Entypo name="dots-three-vertical" size={24} color="black" />
                  </Pressable>
              </View>
          </View>
    </View>
  )
}

export default ShearingInfo

const styles = StyleSheet.create({
    newsCard: {
        width: '100%',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
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
        width: '60%'

    },
    bottomInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    bottomInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    readingTime: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AAAAAA',
    },
    bottomBtns: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20

    },
})