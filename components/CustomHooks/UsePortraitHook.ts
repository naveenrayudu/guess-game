import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const usePortraitHook = () => {
    const [isPortraitMode, setIsPortraitMode] = useState(Dimensions.get('window').height > 550)

    useEffect(() => {
        const onChangeEvent =  () => {
            setIsPortraitMode(Dimensions.get('window').height > 550)
        };
        Dimensions.addEventListener("change", onChangeEvent)

        return () => {
            Dimensions.removeEventListener("change", onChangeEvent)
        }
    }, []);

    return isPortraitMode;
}

export default usePortraitHook;