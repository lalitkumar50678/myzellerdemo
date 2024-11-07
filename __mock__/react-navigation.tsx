import React from 'react';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
  reset: jest.fn(),
};

const mockUseNavigation = () => mockNavigation;

export const NavigationContainer = ({children}) => <>{children}</>;  // Mock the container
export const createStackNavigator = () => ({
  Navigator: ({children}) => <>{children}</>,
  Screen: ({name, component}) => <>{component}</>,
});

export const useNavigation = mockUseNavigation;