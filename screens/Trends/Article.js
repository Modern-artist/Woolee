import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
const Article = ({ route }) => {
    const { article } = route.params;
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
                <Image source={{ uri: article.imageUri }} style={{ width: '100%', height: 300,borderRadius:20 }} />
                <View style={styles.authDetail}>
                    <View style={styles.authDes}>
                        {article.languages.map((language) => (
                            <Pressable key={language} style={styles.voice}>
                                <MaterialIcons name="hearing" size={24} color="black" />
                                <Text>{language}</Text>
                            </Pressable>
                        ))}
                    </View>
                    <View style={styles.authDes}>
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
        fontWeight: '400'

    },
    voice: {
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
        fontWeight: '500'

    }
})