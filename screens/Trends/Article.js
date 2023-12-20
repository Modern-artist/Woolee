import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
const Article = ({ route }) => {
    const { article } = route.params;
    const [speaking, setSpeaking] = useState(false)
    const speakArticle = () => {
        setSpeaking(true);

        Speech.speak(article.content, {
            language: 'hi-IN',
            rate: 1, // Adjust the speech rate if needed
        });
    };
    const hindiSpeakArticle = () => {
        setSpeaking(true);

        Speech.speak(article.Hindcontent, {
            language: 'hi-IN',
            rate: 0.8, // Adjust the speech rate if needed
        });
    };
    const DogriSpeakArticle = () => {
        setSpeaking(true);

        Speech.speak(article.dogriContent, {
            language: 'hi-IN',
            rate: 0.8, // Adjust the speech rate if needed
        });
    };

    useEffect(() => {
        // Stop speech when the component unmounts
        return () => {
            Speech.stop();
        };
    }, []);
    const stopSpeech = () => {
        setSpeaking(false);
        Speech.stop();
    };

    return (
        <ScrollView>
            <View key={article.id} style={styles.container}>
                <View style={styles.authDetail}>
                    <View style={styles.authDes}>
                        <Text style={styles.newsTitle}>{article.title}</Text>
                    </View>
                    <Text style={styles.postDate}>{article.date}</Text>
                </View>
                <Text style={styles.authName}>{article.author}</Text>
                <Image source={{ uri: article.imageUri }} style={{ width: '100%', height: 300, borderRadius: 20 }} />
                <View style={styles.authDetail}>
                    <View style={styles.lang}>
                        <Pressable style={styles.voice} onPress={hindiSpeakArticle}>
                            <MaterialIcons name="hearing" size={24} color="black" />
                            <Text>Hindi</Text>
                        </Pressable>
                        <Pressable style={styles.voice} onPress={speakArticle}>
                            <MaterialIcons name="hearing" size={24} color="black" />
                            <Text>English</Text>
                        </Pressable>
                        <Pressable style={styles.voice} onPress={DogriSpeakArticle}>
                            <MaterialIcons name="hearing" size={24} color="black" />
                            <Text>Dogri</Text>
                        </Pressable>
                        {speaking &&
                            <Pressable style={styles.voice} onPress={stopSpeech}>
                                <Text>Stop</Text>
                            </Pressable>}
                    </View>
                    <View style={styles.timeBook}>
                        <Text style={styles.postDate}>{article.readTime}</Text>
                        <FontAwesome5 name="bookmark" size={26} color="black" />
                    </View>
                </View>
                <Text style={styles.ArticleText}>{article.content}</Text>
            </View>
        </ScrollView>
    );
};

export default Article;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        padding: 20,
        paddingTop: 80,
    },
    authDetail: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    authDes: {
        // backgroundColor:'red',
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    timeBook: {
        // backgroundColor:'red',
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        height: 60,

    },
    authName: {
        fontSize: 16,
        fontWeight: '600'

    },
    postDate: {
        color: "#AAAAAA"

    },
    lang: {
        // backgroundColor:'red',
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        gap: 12,
        height: 120,
    },

    newsTitle: {
        fontSize: 24,
        width: '90%',
        fontWeight: 'bold'
    },
    ArticleText: {
        fontSize: 16,
        fontWeight: '400'

    },
    voice: {
        // backgroundColor:'blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#e1e1e1',
        fontSize: 16,
        fontWeight: '500',
        height: 48,

    }
})