// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hello, world!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30, // Margin from the top to avoid overlapping with the status bar
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});