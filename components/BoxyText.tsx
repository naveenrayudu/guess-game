import React from 'react';
import { Text, TextProps } from 'react-native';
import defaultStyles from '../constants/DefaultStyles';

interface IProps extends Partial<TextProps> {
    customStyles?:{}
}

const BoxyText: React.FC<IProps> = ({customStyles = {}, children, ...rest}) => {
    return (
        <Text style={{...defaultStyles.siteText, ...customStyles}} {...rest}>
            {children}
        </Text>
    )
}

export default BoxyText
