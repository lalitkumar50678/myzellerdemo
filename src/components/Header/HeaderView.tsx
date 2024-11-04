import React from 'react';
import {Text, View} from 'react-native';
import {HeaderType} from './HeaderType';
import styles from './styles';

const HeaderView: React.FC<HeaderType> = ({ headerTxt, style }) => {
    return (
        <View>
            <Text style={styles.headerStyleTxt}>{headerTxt}</Text>
        </View>
    );
};
export default HeaderView;
