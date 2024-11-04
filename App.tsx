/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ApolloProvider} from '@apollo/client';
import client from './src/graphql/setup/InitialConfig';
import RootRouter from './src/router/RootRouter';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <RootRouter />
      </View>
    </ApolloProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }
})