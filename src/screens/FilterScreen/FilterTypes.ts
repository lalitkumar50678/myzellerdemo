import { TextStyle, ViewStyle } from "react-native";

export type UserType ={
    label: string;
    value: string;
    id: number;
};

export type RadioButtomType ={
    selectedBtn: string,
    buttons: UserType[],
    onPress:(id: string) => void,
}