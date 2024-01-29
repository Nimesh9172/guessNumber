import { View, StyleSheet, Image, Text } from "react-native";
import Title from "components/Title";
import color from "constants/colors";
import PrimaryButton from "components/PrimaryButton";

const GameOverScreen = ({userNumber, guessCount, resetGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone taken <Text style={styles.highlightText}>{guessCount}</Text> rounds to
        guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={resetGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
    rowGap: 30,
    height: "100%",
  },
  imageContainer: {
    height: 370,
    width: "100%",
    borderRadius: 200,
    borderColor: color.secondary,
    borderWidth: 5,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 23,
    color: "#fff",
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: "lightblue",
  },
  buttonWrapper:{
    flexDirection: "row",
  }
});

export default GameOverScreen;
