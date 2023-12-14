// JobCardDetail.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JobCardDetail = ({ route }) => {
    const { jobId } = route.params; // Access any parameters passed from the navigation

    return (
        <View style={styles.container}>
            <Text>Job Card Detail Page</Text>
            <Text>Job ID: {jobId}</Text>
        </View>
    );
};

export default JobCardDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
