import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameCompletedScreen from './screens/GameCompletedScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [numberChoosen, setNumberChoosen] = useState(0);
  const [numberOfTurns, setNumberOfTurns] = useState(0);

  const startNewGameHandler = () => {
    setNumberChoosen(0);
    setNumberOfTurns(0);
  }

  if (!fontsLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />


  return (
   
        <View style={styles.screen}>
          <Header title='Guess a Number' />
          {numberChoosen === 0 ?
            <StartGameScreen startGame={setNumberChoosen} />
            : numberOfTurns === 0 ?
              <GameScreen selectedNumber={numberChoosen} setNumberOfTurns={setNumberOfTurns} />
              : <GameCompletedScreen userNumber={numberChoosen}
                numberofGuesses={numberOfTurns}
                restartNewGame={startNewGameHandler} />
          }
        </View>
     
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})