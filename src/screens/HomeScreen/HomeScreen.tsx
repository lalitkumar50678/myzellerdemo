import React, { useEffect } from 'react';
import { View,Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { FILTER_TXT } from '../../utility/Strings';
import { RootStackParamList } from 'router/RouterType';


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}: HomeScreenProps)=>{
  

    const onFilterPageClick = ()=>{
        navigation.navigate('FilterScreen')
    };


    return (
        <View style={styles.container}>
        <View style ={styles.buttomStyle}>
        <Button title={FILTER_TXT}
            onPress={onFilterPageClick}/>
        </View>
            
        </View>
    );
};
export default HomeScreen;
