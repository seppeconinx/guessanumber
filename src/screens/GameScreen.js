import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../assets/constants/colors'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return randomNumber;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    return(
        <View style={styles.screen}>
            <Text>Computer guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() =>{} } color={colors.primary}/>
                <Button title="HIGHER" onPress={() =>{} } color={colors.primary}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;