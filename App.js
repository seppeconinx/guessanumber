import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';


const fetchFonts = () => {
  return Font.loadAsync({
    'StarTrack': require('./src/assets/fonts/StarTrack.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>;
  }

  const configureNewGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = numRounds => {
    setRounds(numRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }
  else if(rounds > 0){
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} restart={configureNewGameHandler}/>
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
