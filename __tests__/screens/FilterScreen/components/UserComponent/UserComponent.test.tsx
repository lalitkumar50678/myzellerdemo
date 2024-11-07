import { fireEvent, render } from "@testing-library/react-native";
import UserComponent from "../../../../../src/screens/FilterScreen/components/userComponent/UserComponent";
import {
  USER_COMPONENT_NAME_TESTID,
  USER_COMPONENT_ROLE_TESTID,
} from "../../../../../src/utility/TestIds";

const roleType  = 'Manager';
const name = 'Darvik';
describe("User component", () => {
  it("Should return name and role", async () => {
    const { findByTestId } = render(
      <UserComponent name={name} role={roleType} />
    );
    const userTxt = await findByTestId(USER_COMPONENT_NAME_TESTID);
    const roleTxt = await findByTestId(USER_COMPONENT_ROLE_TESTID);
    expect(userTxt.props.children).toEqual("D");
    expect(roleTxt.props.children).toEqual(roleType.toLowerCase());
  });
});
