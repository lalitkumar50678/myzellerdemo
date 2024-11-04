import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "./styles";
import { RadioButtomType } from "screens/FilterScreen/FilterTypes";

const RadioButton: React.FC = ({
  buttons,
  onPress,
  selectedBtn,
}:  RadioButtomType) => {
  return (
    <View style={styles.container}>
      {buttons.map((item) => (
        <TouchableOpacity
          style={
            item.value === selectedBtn
              ? [styles.radioStyle, styles.radioStyleFill]
              : styles.radioStyle
          }
          onPress={() => onPress(item.value)}
          key={item.id}
        >
          <View
            style={
              item.value === selectedBtn
                ? [styles.circluerStyleFill, styles.circluerStyle]
                : [styles.circluerStyleUnFill, styles.circluerStyle]
            }
          >
            {item.value === selectedBtn && <View style={styles.fillCircle} />}
          </View>
          <Text style={styles.textStyle}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default RadioButton;
