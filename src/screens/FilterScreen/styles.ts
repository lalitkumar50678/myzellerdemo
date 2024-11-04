import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BLACK, GRAY, TRANSPARENT_BG } from "../../utility/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    marginTop: 30,
    marginStart: 30,
    paddingBottom: 10,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: BLACK,
  },
  dividerline: {
    width: "90%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: GRAY,
    alignItems: "center",
    alignSelf: 'center',
  },
  listStyle: {
    flex: 1,
    marginVertical: 20,
  },
  loaderStyle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: TRANSPARENT_BG,
  },
  radioBtnStyle:{
    marginTop: 10,
  },
  radioViewStyle:{
    alignItems: "flex-start",
  },
  inputTxt:{
    height: 50,
    width: 200,
    borderColor: GRAY,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems:'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingStart: 10,
  }
});
export default styles;
