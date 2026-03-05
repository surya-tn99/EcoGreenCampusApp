import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')} // Update with the correct path to your logo image
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Adjust based on your design
    },
    logo: {
        width: '80%', // Adjust based on your design
        height: '20%', // Adjust based on your design
    },
});

export default Logo;