import React from "react";
import { View, Text } from "react-native";
import userStyles from "./styles";
import { getFirstNameOfName } from "../../../../utility/Utils";

type UserType = {
  name: string;
  role: "Manager" | "Admin";
};

const UserComponents = ({name,role}: UserType) => {
  return (
    <View style={userStyles.userStyle}>
      <View style={userStyles.profileStyle}>
        <Text style={userStyles.profileTxt}>{getFirstNameOfName(name)}</Text>
      </View>
      <View style={userStyles.nameStyle}>
        <Text style={userStyles.userStyle}>{name}</Text>
        <Text style={userStyles.userTypeTxt}>{role.toLowerCase()}</Text>
      </View>
    </View>
  );
};

export default UserComponents;
