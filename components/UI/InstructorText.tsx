import { Text, StyleSheet } from "react-native";

const InstructorText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily:"open-sans",
    fontSize: 26,
    color: "#fff",
  },
});

export default InstructorText;
