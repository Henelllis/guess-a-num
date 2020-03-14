import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.gameScreen}>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    gameScreen: {
        flex:1,
        padding:36, //cope with padding from device
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems:'center',
    }
});

export default StartGameScreen;
