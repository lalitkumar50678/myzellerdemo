import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { RootStackParamList } from './RouterType';
import FilterScreen from '../screens/FilterScreen/FilterScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRouter;
