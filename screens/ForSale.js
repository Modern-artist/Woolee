import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import JobCard from '../components/JobCard';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const ForSale = () => {
    const navigation = useNavigation();
    const { isLoggedIn, user } = useAuth();
    const [marketPlace, setMarketPlace] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchMarketplace = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/mystore', config);
                setMarketPlace(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching Marketplace:', error);
                setIsLoading(false)
            }
        };

        fetchMarketplace();
    }, []);

    return (
        <ScrollView>
            {marketPlace?.map((product) => (
                <JobCard
                    key={product.id}
                    product={product}
                    onPress={() => navigation.navigate("Product", { product })}
                />
            ))}
        </ScrollView>
    )
}

export default ForSale

const styles = StyleSheet.create({})