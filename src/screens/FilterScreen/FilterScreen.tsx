import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useMemo, useState } from "react";
import { View, FlatList, ActivityIndicator, Text,RefreshControl, ScrollView, TextInput } from "react-native";
import { RootStackParamList } from "router/RouterType";
import { useQuery } from "@apollo/client";
import GET_ZELLER from "./schema";
import { SEARCH_USER, USER, USER_TYPE_TXT } from "../../utility/Strings";
import { UserType } from "./FilterTypes";
import { BLACK, BLUE } from "../../utility/Colors";
import HeaderView from "../../components/Header/HeaderView";
import UserComponents from "./components/userComponent/UserComponent";
import SeparatorComponent from "../../components/separatorComponent/SeparatorComponent";
import styles from "./styles";
import RadioButton from "./components/RadioButton/RadioButtom";
import { toCamelCase } from "../../utility/Utils";

const userTypeArr: UserType[] = [
  {
    id: 1,
    label: "Admin",
    value: "ADMIN",
  },
  {
    id: 2,
    label: "Manger",
    value: "MANAGER",
  },
];

type FilterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "FilterScreen"
>;

const FilterScreen = ({}: FilterScreenProps) => {
  const [role, setRole] = useState("ADMIN");
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchUser,setSearchUser] = React.useState('');
  const [filterList,setFilterList] = React.useState<UserType[] | null>(null);
  const roleFilter = role ? { eq: role } : undefined;
  const { loading, error, data } = useQuery(GET_ZELLER, {
    variables: { roleFilter },
  });

 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  if(!loading && refreshing){
    setRole('ADMIN');
    setRefreshing(false);
    setSearchUser('');
  }

 
  const onTextChange=(text: string)=>{
    setSearchUser(text);
  }

  const onRadioButtonChange=(selectedRole: string)=>{
    setRole(selectedRole);
    setSearchUser('');
  }

  useEffect(()=>{
    if(searchUser.trim().length > 0 ){
      if(data?.listZellerCustomers?.items){
        setFilterList(data?.listZellerCustomers?.items.filter(item => item.name.toLowerCase().includes(searchUser.toLowerCase()) ? item : null  ))
      }
    }
  },[searchUser])

  if (!!error) {
    return (
      <View style={styles.containerCenter}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  
  return (
    <View style={styles.container}>
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <TextInput style={styles.inputTxt} onChangeText={onTextChange} value={searchUser} placeholder={SEARCH_USER} />
        <View style={styles.headerView}>
          <HeaderView headerTxt={USER_TYPE_TXT} />
          <View style={styles.radioViewStyle}>
            <RadioButton
              selectedBtn={role}
              buttons={userTypeArr}
              onPress={onRadioButtonChange}
            />
          </View>
        </View>
        <View style={styles.dividerline} />
        <View style={styles.headerView}>
          <HeaderView headerTxt={`${toCamelCase(role)} ${USER}`} />
          <FlatList
            data={searchUser.trim().length > 0 ? filterList : data?.listZellerCustomers?.items}
            contentContainerStyle={styles.listStyle}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <UserComponents name={item.name} role={item.role} />
            )}
            ItemSeparatorComponent={() => <SeparatorComponent />}
          />
          <View style={styles.dividerline} />
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.loaderStyle}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
export default FilterScreen;
