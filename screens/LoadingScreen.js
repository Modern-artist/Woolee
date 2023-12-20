import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            {/* You can replace 'loading.gif' with the path to your actual GIF file */}
            <Image source={require('../assets/loader.gif')} style={styles.gif} />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff', // Customize the background color
    },
    gif: {
        width: 120, // Set an appropriate width
        height: 120, // Set an appropriate height
    },
});

export default LoadingScreen;
