import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NewsCard from '../../components/NewsCard'
import woolFarmingArticles from '../Trends/woolFarmingArticles';
import { useNavigation } from "@react-navigation/native"


const Farming = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.contentContainer}>
            <ScrollView style={styles.content}>
                {woolFarmingArticles.map((article) => (
                    <NewsCard
                        key={article.id}
                        article={article}
                        onPress={() => navigation.navigate("Article", { article })}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Farming

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
    },
})