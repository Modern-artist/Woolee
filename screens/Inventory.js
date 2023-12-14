import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import InventoryCard from '../components/InventoryCard'
import { Dropdown } from 'react-native-element-dropdown';

const Inventory = () => {

  return (
<ScrollView>
    <View style={styles.container}>
      
      <View style={{flexDirection:'row', justifyContent: "space-between",alignItems:'center'}}>
          <Text style={styles.title}>Total</Text>
          <View style={{ justifyContent: "space-between" }}>
            <Text style={styles.value}>128 Kg</Text>
            <Text style={styles.labal}>Wool Avaliable</Text>
          </View>
         
      </View>
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filter:</Text>

        </View>
      <InventoryCard/>
      <InventoryCard/>
      <InventoryCard/>
      <InventoryCard/>
      <InventoryCard/>
    </View>
    </ScrollView>
  )
}

export default Inventory

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize:28,
    fontWeight:"bold",
    color:"#666666"
  },
  value: {
    fontSize:28,
    fontWeight:"bold"
  },
  labal: {
    fontSize:18,
    color:"#AAAAAA",
    fontWeight: "bold",

  },
})