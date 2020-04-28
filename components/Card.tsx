import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card: React.FC<{
    style?: {}
}> = ({children, style={}}) => {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        marginTop: 10,
        padding: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.26,
        shadowRadius: 3.84,
        backgroundColor: 'white',
    }
})

export default Card
