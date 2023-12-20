import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, Feather, Entypo, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Shearing = () => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [shearer, setShearer] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const fetchShearer = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      };
      try {
        const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/shearers', config);
        setShearer(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
      }
    };
    fetchShearer();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {shearer?.map((shearer) => (
          <View style={styles.Card}>
            <View style={styles.authDetail}>
              <View style={styles.authDes}>
                <AntDesign name="taobao-circle" size={24} color="black" />
                <Text style={styles.authName}>{shearer?.shearing_company}s</Text>
              </View>
              <Text style={styles.postDate}>Experience : {shearer?.experience_years}+yrs</Text>
            </View>
            <Text style={styles.newsTitle}>Shearing</Text>
            <View style={styles.newsBioImg}>
              <Text style={styles.newsBio} numberOfLines={3} ellipsizeMode="tail">
                <Ionicons name="ios-location-outline" size={24} color="black" />
                District: {shearer?.district}{" | "}State: {shearer?.state}
              </Text>
            </View>
            <View style={styles.bottomInfo}>
              <Ionicons name="md-call-outline" size={24} color="#AAAAAA" />
              <Text style={styles.readingTime}>{shearer?.phone} </Text>
              <Text style={styles.readingTime}>{shearer?.phone} </Text>
              <View style={styles.bottomBtns}>
                <Pressable onPress={() => { /* Add your action for the vertical dots button */ }}>
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </Pressable>
              </View>
            </View>
            <View style={styles.seeBtn}>
              <Text style={styles.seeText}>Request Service</Text>
              <Feather name="arrow-right-circle" size={24} color="white" />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Shearing

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    // padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    // borderBottomColor: '#e7e7e7',
    // borderBottomWidth: 2,
  },
  Card: {
    // paddingVertical:60,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 2,
  },
  newsCard: {
    width: '100%',
    // paddingTop: 20,
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
  seeBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    gap: 12,
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