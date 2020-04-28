import React, { useState, useRef, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Button, StyleSheet, Alert, ScrollView, TextBase, Dimensions } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import defaultStyles from '../constants/DefaultStyles';
import MainButton from '../components/MainButton';
import BoxyText from '../components/BoxyText';
import usePortraitHook from '../components/CustomHooks/UsePortraitHook';

const randomNumberGenerator = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude)
        return randomNumberGenerator(min, max, exclude);

    return rndNum;
}


const listItemGenerator = (text: any, index: number) => {
    return (
        <View key={index} style={styles.listItemContainer}>
            <BoxyText>#{index}</BoxyText>
            <BoxyText>{text}</BoxyText>
        </View>
    )
}


const GameScreen: React.FC<{
    selectedNumber: number,
    setNumberOfTurns: (number: number) => void
}> = ({ selectedNumber, setNumberOfTurns }) => {

    const [pastGusses, setPastGusses] = useState([randomNumberGenerator(1, 100, selectedNumber)]);
    const isPortraitMode = usePortraitHook();

    const lowRef = useRef(1);
    const highRef = useRef(100);


    const updateOpponentsGuess = (direction: 'INCREASE' | 'DECREASE') => {
        const currentGuess = pastGusses[0];
        if ((direction === 'INCREASE' && currentGuess >= selectedNumber)
            || (direction === 'DECREASE' && currentGuess <= selectedNumber)) {

            Alert.alert('Don\'t lie', 'You can\'t cheat the system...', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ])

            return;
        }

        if (direction === 'DECREASE') {
            highRef.current = currentGuess;
        } else {
            lowRef.current = currentGuess;
        }

        const newRandomNumber = randomNumberGenerator(lowRef.current, highRef.current, currentGuess);

        setPastGusses(pastGuesses => [newRandomNumber, ...pastGuesses])
    }


    useEffect(() => {
        if (pastGusses[0] === selectedNumber) {
            setNumberOfTurns(pastGusses.length)
        }
    }, [setNumberOfTurns, selectedNumber, pastGusses])



    return (
        <View style={styles.screen}>
            <View style={{
                flexGrow: 1,
                alignItems: 'center',
                flexDirection: isPortraitMode ? 'column' : 'row'
            }}>
                <View style={{
                    alignItems: 'center',
                    marginLeft: !isPortraitMode ? 50: 0
                }}>
                    <Text style={defaultStyles.siteTextBold}>Opponent's Move</Text>
                    <View style={{
                        width: 60,
                        alignItems: 'center'
                    }}>
                        <NumberContainer number={pastGusses[0]} />
                    </View>
                    <Card style={styles.buttonContainer}>
                        <MainButton onPress={() => updateOpponentsGuess('DECREASE')} >
                            <FontAwesome name='minus' size={24} />
                        </MainButton>
                        <MainButton onPress={() => updateOpponentsGuess('INCREASE')} >
                            <FontAwesome style={{
                                borderRadius: 10
                            }} name='plus' size={24} />
                        </MainButton>
                    </Card>
                </View>


                <ScrollView contentContainerStyle={styles.list}>
                    {
                        pastGusses.map((guess, index) => listItemGenerator(guess, pastGusses.length - index))
                    }
                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200
    },
    listItemContainer: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: Dimensions.get('window').height > 550 ? 15 : 10,
        marginVertical: Dimensions.get('window').height > 550 ? 10 : 5,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width > 350 ? '60%' : '70%'
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})


export default GameScreen
