import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const Article = () => {
    // const articleText = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ... (your long text) ...`;

    // const speakArticle = async () => {
    //     try {
    //         await Speech.speak(articleText, {
    //             language: 'en-US', // You can change the language as needed
    //         });
    //     } catch (error) {
    //         console.error('Error while trying to speak:', error);
    //     }
    // };

    // useEffect(() => {
    //     // Set up event listeners when the component mounts
    //     const speakingStartedListener = Speech.addListener('speakingStarted', () => {
    //         console.log('Speech started');
    //     });

    //     const speakingFinishedListener = Speech.addListener('speakingFinished', () => {
    //         console.log('Speech finished');
    //     });

    //     // Clean up event listeners when the component unmounts
    //     return () => {
    //         speakingStartedListener.remove();
    //         speakingFinishedListener.remove();
    //     };
    // }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount



    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.authDetail}>
                    <View style={styles.authDes}>
                        {/* <Image ></Image> */}
                        <Text style={styles.newsTitle} >Improving Wool Farming</Text>

                    </View>
                    <Text style={styles.postDate} >Aug 9</Text>
                </View>
                <Text style={styles.authName}>Ministry of Textile</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1627730433054-9ccb05ef8c6a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={{ width: '100%', height: 300 }} ></Image>
                <View style={styles.authDetail}>
                    <View style={styles.authDes}>
                        {/* <Image ></Image> */}
                        <Pressable style={styles.voice}  >
                            <MaterialIcons name="hearing" size={24} color="black" />
                            <Text>Hindi</Text>
                        </Pressable>
                        <Pressable style={styles.voice}  >
                            <MaterialIcons name="hearing" size={24} color="black" />
                            <Text>English</Text>
                        </Pressable>
                    </View>
                    <View style={styles.authDes}>
                        <Text style={styles.postDate} >12 min read</Text>
                        <FontAwesome5 name="bookmark" size={26} color="black" />
                    </View>
                </View>
                <Text style={styles.ArticleText}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Article;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        padding: 20
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
        fontSize: 24,
        width: '90%',
        fontWeight: 'bold'
    },
    ArticleText: {
        fontSize: 16,
        fontWeight: '500'

    },
    voice: {
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        gap:8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#e1e1e1',
        fontSize: 16,
        fontWeight: '500'

    }
})