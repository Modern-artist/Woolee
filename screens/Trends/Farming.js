import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NewsCard from '../../components/NewsCard'

const Farming = () => {
    return (
        <View style={styles.contentContainer}>
            <ScrollView style={styles.content}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
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