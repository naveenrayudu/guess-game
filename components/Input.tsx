import React from 'react';
import { TextInput, TextInputProps, View, StyleSheet } from 'react-native';


interface IProps extends Partial<TextInputProps> {
    customStyes?: {}
}


const Input: React.FC<IProps> = ({customStyes={}, ...rest}) => {
    return (
        <View style={{...styles.inputBox, ...customStyes}}>
            <TextInput style={{
                textAlign: 'center'
            }} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 40,
        marginBottom: 20
    }
})

export default Input
