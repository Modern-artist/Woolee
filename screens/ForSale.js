import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import JobCard from '../components/JobCard'

const ForSale = () => {
    return (
        <ScrollView>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </ScrollView>
    )
}

export default ForSale

const styles = StyleSheet.create({})