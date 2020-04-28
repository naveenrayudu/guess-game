import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/Color';
import defaultStyles from '../constants/DefaultStyles';

const Header: React.FC<{
    title: string
}> = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={{...defaultStyles.siteTextBold, ...styles.headerText}}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        padding: 36,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
})

export default Header;
