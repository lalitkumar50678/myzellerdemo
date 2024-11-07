// __mocks__/react-navigation/native-stack.js
import React from 'react';

// Mock createNativeStackNavigator to return a basic navigator
export const createNativeStackNavigator = () => ({
  Navigator: ({children}) => <>{children}</>,
  Screen: ({name, component}) => <>{component}</>,
});

// You can mock useNavigation if you want to track navigation methods
export const useNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
  reset: jest.fn(),
});
