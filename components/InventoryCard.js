import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const InventoryCard = () => {
    return (
        <View style={styles.inventoryCard} >
            <Text style={styles.title}>Pashmina Wool (Cashmere)</Text>
            <Text style={styles.subText}>Batch #12A16YA</Text>
            <View style={styles.certDate}>
                <View style={styles.jobCard}>
                    {/* <Image></Image> */}
                    <Text style={styles.subText}>A+ Certified</Text>
                </View>
                <Text style={styles.subText}>Production Date - 12hrs ago</Text>
            </View>
            <View style={styles.allCara}>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>128kg</Text>
                    <Text style={styles.label}>Quantity</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Lightly Soft</Text>
                    <Text style={styles.label}>Softness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>91mm</Text>
                    <Text style={styles.label}>Thickness</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>Off White</Text>
                    <Text style={styles.label}>Colour</Text>
                </View>
                <View style={styles.valueLabel}>
                    <Text style={styles.value}>In Farm</Text>
                    <Text style={styles.label}>Location</Text>
                </View>
            </View>
        </View>

    )
}

export default InventoryCard

const styles = StyleSheet.create({

    inventoryCard: {
        display: 'flex',
        gap: 20,
        paddingVertical: 20,
        borderBottomColor: "#e7e7e7",
        borderBottomWidth: 2
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: '#888888',
        fontSize: 16,
        fontWeight: '500'

    },
    certDate: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    allCara: {
        display: 'flex',
        // width: '100%',
        flexDirection: 'row',
        gap: 20,
        rowGap: 20,
        flexWrap: 'wrap',
        // justifyContent: 'space-between'
    },
    valueLabel: {
        backgroundColor: '#E7E7E7',
        padding: 20,
        borderRadius: 12,
    },
    value: {
        // color: '#AAAAAA',
        fontWeight: 'bold',
        fontSize: 18,
    },
    label: {
        color: '#888888',


    },

})