import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../components/Card';
import Input from '../components/Input'
import colors from '../assets/constants/colors'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        //Replace anything which is not a number between 0-9
        //setEnteredValue(inputText.replace(/[^0-9]/g), '');
    };
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={() => { }} color={colors.reset} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => { }} color={colors.confirm} /></View>


                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: '75%',
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 90
    }
});

export default StartGameScreen;