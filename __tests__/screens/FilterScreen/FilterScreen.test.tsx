import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import FilterScreen from "../../../src/screens/FilterScreen/FilterScreen";
import {
  FILTER_SCREEN_ERROR_TEXT_ID,
  LOADER_INDICATION_TESTID,
  SEARCH_INPUT_TXT_TESTID,
} from "../../../src/utility/TestIds";
import GET_ZELLER from "../../../src/screens/FilterScreen/schema";

const mockDataWithError = {
  request: {
    query: GET_ZELLER,
    variables: { name: "ADMIN" },
  },
  error: new Error("An error occurred"),
};

const mockDataWithResponse = [
  {
    request: {
      query: GET_ZELLER,
      variables: {"roleFilter":{"eq":"ADMIN"}},
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              __typename: "ZellerCustomer",
              email: "david@gmail.com",
              id: "73bae2af-4fa4-4023-8829-1034604e7590",
              name: "David Miller",
              role: "ADMIN",
            },
          ],
        },
      },
    },
  },
];

const mockNavigation = {
  navigate: jest.fn(),
};

const mockRoute = {
  params: undefined, // You can provide specific route params here if needed
};

describe("Filter Screen Component", () => {
  it("should render loading initially", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <FilterScreen navigation={mockNavigation} route={mockRoute} />
      </MockedProvider>
    );
    expect(await findByTestId(LOADER_INDICATION_TESTID)).toBeTruthy();
  });

  it("Should error test visible if there ant error occur", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockDataWithError]} addTypename={false}>
        <FilterScreen />
      </MockedProvider>
    );
    expect(await findByTestId(FILTER_SCREEN_ERROR_TEXT_ID)).toBeTruthy();
  });

  it("Should render flatlist items", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mockDataWithResponse} addTypename={false}>
        <FilterScreen />
      </MockedProvider>
    );
    await waitFor(() => getByText('David Miller'));
    expect(await getByText('David Miller')).toBeTruthy();
  });


  it("TextInput should update when text changes", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={mockDataWithResponse} addTypename={false}>
        <FilterScreen />
      </MockedProvider>
    );
    const textInput  =await findByTestId(SEARCH_INPUT_TXT_TESTID)
    fireEvent.changeText(textInput,'David');
    expect(textInput.props.value).toBe('David');
  });

});
