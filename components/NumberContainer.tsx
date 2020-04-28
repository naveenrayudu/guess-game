import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Color';

const NumberContainer: React.FC<{
    number: number
}> = ({number}) => {
    return (
       <View style={styles.numberContainer}>
           <Text style={styles.numberText}>{number}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent,
        borderWidth: 2,
        paddingVertical: 10,
        width: '80%',
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    numberText: {
        color: Colors.accent,
        fontSize: 22
    }
})

export default NumberContainer
