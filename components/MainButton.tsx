import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Color';

interface IProps {
    onPress: () => void
}

const MainButton: React.FC<IProps> = ({onPress, children}) => {
    return (
       <TouchableHighlight activeOpacity={0.6} onPress={onPress}>
           <View style={styles.container}>
               <Text style={styles.buttonText}>
                    {children}
               </Text>
           </View>
       </TouchableHighlight>
    )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: Colors.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'open-sans'
    }
})

export default MainButton;
