import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber) {
    content = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
