import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const StatusBarBackground = () => {
    return (
        <View style={styles.statusBarBackground}>
            <StatusBar translucent backgroundColor="transparent" />
        </View>
    );
};

const styles = StyleSheet.create({
    statusBarBackground: {
        flex: 0,
        backgroundColor: '#yourColorHere', // Replace with the color from your Figma design
    },
});

export default StatusBarBackground;