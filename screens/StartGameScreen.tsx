import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';
import colors from '../constants/Color';
import NumberContainer from '../components/NumberContainer';
import defaultStyles from '../constants/DefaultStyles';
import MainButton from '../components/MainButton';


const StartGameScreen: React.FC<{
    startGame: (number: number) => void
}> = ({ startGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmedValue, setConfirmedValue] = useState(0);

    const inputChangeHandler = (value: string) => {
        setEnteredValue(value.replace(/[^0-9.]/gi, ''));
    }

    const resetHandler = () => {
        setEnteredValue('');
    }

    const confirmHandler = () => {
        const confirmedNumber = parseInt(enteredValue);

        if (isNaN(confirmedNumber) || confirmedNumber === 0 || confirmedNumber > 99) {

            Alert.alert('Invalid Number!', 'Value has to be a number between 1 and 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetHandler
            }])

            return;
        }

        setConfirmedValue(confirmedNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{flex: 1}} behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }} accessible={false}>
                    <View style={styles.screen}>
                        <Text style={{ ...styles.title, ...defaultStyles.siteTextBold }}>Start a Game</Text>
                        <Card>
                            <Text style={defaultStyles.siteText}>Select a Number</Text>
                            <Input keyboardType='numeric'
                                blurOnSubmit
                                maxLength={2}
                                value={enteredValue}
                                onChangeText={inputChangeHandler} />

                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    <Button color={colors.accent} title='Reset' onPress={resetHandler} />
                                </View>
                                <View style={styles.button}>
                                    <Button color={colors.primary} title='Confirm' onPress={confirmHandler} />
                                </View>
                            </View>
                        </Card>

                        {
                            confirmedValue > 0 &&
                            <Card style={styles.numberCard} >
                                <Text style={defaultStyles.siteText}>You Selected</Text>
                                <NumberContainer number={confirmedValue} />
                                <MainButton onPress={() => startGame(confirmedValue)}>
                                    Start Game
                       </MainButton>
                            </Card>

                        }
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    },
    button: {
        width: 80
    },
    numberCard: {
        width: 200,
        marginTop: 30
    }
})

export default StartGameScreen
