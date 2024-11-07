import React from "react";
import { View, Text } from "react-native";
import userStyles from "./styles";
import { getFirstNameOfName } from "../../../../utility/Utils";
import { USER_COMPONENT_NAME_TESTID, USER_COMPONENT_ROLE_TESTID } from "../../../../utility/TestIds";

type UserType = {
  name: string;
  role: "Manager" | "Admin";
};

const UserComponents: React.FC<UserType> = ({name,role}) => {
  return (
    <View style={userStyles.userStyle}>
      <View style={userStyles.profileStyle}>
        <Text testID={USER_COMPONENT_NAME_TESTID} style={userStyles.profileTxt}>{getFirstNameOfName(name)}</Text>
      </View>
      <View style={userStyles.nameStyle}>
        <Text style={userStyles.userStyle}>{name}</Text>
        <Text testID={USER_COMPONENT_ROLE_TESTID} style={userStyles.userTypeTxt}>{role.toLowerCase()}</Text>
      </View>
    </View>
  );
};

export default UserComponents;
