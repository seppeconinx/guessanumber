import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game over!</Text>
            <Text>Number of rounds needed: {props.roundsNumber}</Text>
            <Text>The correct number was: {props.userNumber}</Text>
            <Button title="New game" onPress={props.restart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;
