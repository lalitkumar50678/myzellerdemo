import { fireEvent, render } from "@testing-library/react-native";
import RadioButton from "../../../../../src/screens/FilterScreen/components/RadioButton/RadioButton";
import { UserType } from "screens/FilterScreen/FilterTypes";
import { RADIO_BUTTON_TESTID } from "../../../../../src/utility/TestIds";

const mockButtons: UserType[] = [
  {
    id: 1,
    label: "Admin",
    value: "ADMIN",
  },
  {
    id: 2,
    label: "Manager",
    value: "MANAGER",
  },
];

const mockFun = jest.fn();
describe("Radio Button component", () => {
  it("Should return admin when first button click", async () => {
    const { findByTestId } = render(
      <RadioButton
        buttons={mockButtons}
        selectedBtn={"Admin"}
        onPress={mockFun}
      />
    );
    fireEvent.press(
      await findByTestId(`${RADIO_BUTTON_TESTID}${mockButtons[0].id}`)
    );
    expect(mockFun).toHaveBeenCalledWith("ADMIN");
  });

  it("Should return manager when second button click", async () => {
    const { findByTestId } = render(
      <RadioButton
        buttons={mockButtons}
        selectedBtn={"Manager"}
        onPress={mockFun}
      />
    );
    fireEvent.press(
      await findByTestId(`${RADIO_BUTTON_TESTID}${mockButtons[1].id}`)
    );
    expect(mockFun).toHaveBeenCalledWith("MANAGER");
  });
});
