import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import BoxyText from '../components/BoxyText'
import Colors from '../constants/Color';
import MainButton from '../components/MainButton';

const GameCompletedScreen: React.FC<{
    numberofGuesses: number,
    userNumber: number,
    restartNewGame: () => void
}> = ({ numberofGuesses, userNumber, restartNewGame }) => {
    const imageHeight: number = Dimensions.get('window').height / 3;
    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <BoxyText style={{ fontFamily: 'open-sans-bold', fontSize: 22 }}>You completed the game</BoxyText>
                <Image style={{
                    width: imageHeight,
                    height: imageHeight,
                    borderRadius: imageHeight / 2,
                    marginVertical: 20,
                    borderColor: 'black',
                    borderWidth: 3
                }} fadeDuration={1000} source={require('../assets/original.png')} />


                <BoxyText style={{
                    textAlign: 'center',
                    fontSize: 22,
                    paddingHorizontal: 20,
                    marginBottom: 15
                }}>
                    Your mobile needed
                 <Text style={styles.numberText}> {numberofGuesses} </Text>
                 attempts to guess <Text style={styles.numberText}>{userNumber}</Text>.
            </BoxyText>

                <MainButton onPress={restartNewGame}>
                    New Game
            </MainButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    numberText: {
        color: Colors.accent
    }
})

export default GameCompletedScreen
