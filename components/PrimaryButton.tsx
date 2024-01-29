import color from "constants/colors";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: color.secondaryLight }}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.buttonInnerContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex:1,
    backgroundColor: color.secondary,
    borderRadius: 28,
    elevation: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize:18,
    // fontFamily:"open-sans",
    fontWeight:"500"
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
