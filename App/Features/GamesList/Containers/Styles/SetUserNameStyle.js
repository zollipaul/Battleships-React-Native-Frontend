import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../../../Themes/index";
import ApplicationStyles from "../../../../Themes/ApplicationStyles";
import { human } from "react-native-typography";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background
  },
  input: {
    textAlign: "center",
    color: Colors.white,
    borderRadius: 5,
    width: "80%",
    height: 40,
    borderColor: Colors.white,
    borderWidth: 1,
    marginBottom: Metrics.doubleBaseMargin
  },
  button: {
    width: 60,
    height: 40,
    backgroundColor: Colors.buttonBackground,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    ...ApplicationStyles.shadow
  },
  textContainer: {
    marginBottom: Metrics.doubleBaseMargin,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    ...human.title3Object,
    color: Colors.white
  },
  headerSubtext: {
    ...human.bodyObject,
    color: Colors.white
  },
  buttonText: {
    ...human.headlineObject,
    color: Colors.white
  }
});
