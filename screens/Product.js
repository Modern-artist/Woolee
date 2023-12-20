import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Product = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView>
      <View key={product.id}>
        <Text style={styles.title}>{product.batch.type}</Text>
        <Text style={styles.price}>{product.batch.production_date}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({})