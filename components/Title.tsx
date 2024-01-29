import color from "constants/colors";
import { Text, StyleSheet } from "react-native";

interface TProps{
  children : React.ReactNode
}

const Title:React.FC<TProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    elevation:4,
    fontSize: 25,
    fontFamily:"open-sans-bold",
    // fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    backgroundColor:color.primary,
    borderColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },
});

export default Title;
