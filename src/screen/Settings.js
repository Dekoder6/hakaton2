import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Налаштування</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
