import color from "constants/colors";
import { Text, StyleSheet } from "react-native";

interface NCProps {
  children: React.ReactNode;
}

const NumberContainer:React.FC<NCProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical:10,
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor:"#fff",
    color: color.primary,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#864AF9",
    borderRadius: 12,
    padding: 20,
    elevation:4,
  },
});

export default NumberContainer;
