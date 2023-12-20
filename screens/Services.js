import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import NavBar from '../components/NavBar';
import Shering from '../assets/services/Sh.jpeg';
import Grading from '../assets/services/Gr.jpeg';
import Carding from '../assets/services/Ca.jpeg';
import Spinning from '../assets/services/Sp.jpeg';
import Dyeing from '../assets/services/Dy.jpeg';
import Blending from '../assets/services/Bl.jpeg';
import WareHouse from '../assets/services/WH.jpeg';
import AnimalHealth from '../assets/services/AH.jpeg';
import { useNavigation } from "@react-navigation/native";


const Services = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.serviceHead}>Services we Provide:</Text>
                    <View style={styles.twoTiles}>
                        <Pressable style={styles.tiles} onPress={() => navigation.navigate("Shearing")}>
                            <Text style={styles.label}>Shearing</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Wool Grading</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.twoTiles}>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Carding</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Spinning</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.twoTiles}>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Dyeing</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Blending</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.twoTiles}>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Warehouse</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.tiles}>
                            <Text style={styles.label}>Animal Health</Text>
                            <Feather name="arrow-right-circle" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Shering
                        </Text>
                        <Image source={Shering} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Grading
                        </Text>
                        <Image source={Grading} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Spinning
                        </Text>
                        <Image source={Spinning} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Dyeing
                        </Text>
                        <Image source={Dyeing} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Blending
                        </Text>
                        <Image source={Blending} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Ware House
                        </Text>
                        <Image source={WareHouse} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>
                            Animal Health
                        </Text>
                        <Image source={AnimalHealth} 
                            style={{ width: '100%', borderRadius: 12, }} ></Image>
                        <Text style={styles.serviceBio}>
                            Combining different types or colors of wool fibers to achieve specific characteristics in the final product.
                            Helps create blends with desired qualities, such as softness or durability.
                        </Text>
                        <Pressable style={styles.seeBtn}>
                            <Text style={styles.seeText}>Get Services</Text>
                            <Feather name="arrow-right-circle" size={24} color="white" />
                        </Pressable>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Services

const styles = StyleSheet.create({


    container: {
        flex: 1,
        padding: 20,
        gap: 20,
        // backgroundColor:'red',

    },

    serviceHead: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    twoTiles: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 20,

    },

    tiles: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#e7e7e7',
    },
    label: {
        fontSize: 16,
        fontWeight: '600'
    },
    serviceTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111111',
    },
    serviceBio: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666666',
    },
    serviceCard: {
        display: 'flex',
        gap: 20,
        flex: 1,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#e7e7e7',
        paddingVertical: 20,
        paddingBottom: 40,
    },
    seeBtn: {
        display: 'flex',
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#111111',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 123,
        flexDirection: 'row',
        gap: 20
    },
    seeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

})