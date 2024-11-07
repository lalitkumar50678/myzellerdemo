import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import HomeScreen from '../../../src/screens/HomeScreen/HomeScreen';
import { FILTER_BTN_TESTID, SEARCH_INPUT_TXT_TESTID } from '../../../src/utility/TestIds';



describe('Home Screen Component', () => {
  const mockNavigate = jest.fn();  

  it('should render loading state initially',async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
      <HomeScreen navigation={{
        navigate: mockNavigate
      }}/>
    </MockedProvider>
    );
    fireEvent.press(await findByTestId(FILTER_BTN_TESTID));
    //await waitFor(() => gett ('Details Screen'));
    expect(mockNavigate).toHaveBeenCalledWith('FilterScreen');
  });

});

