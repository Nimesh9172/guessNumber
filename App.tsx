import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import StartGameScreen from "screens/StartGameScreen";
import GameScreen from "screens/GameScreen";
import GameOverScreen from "screens/GameOverScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [userNumber, setUserNumber] = useState<number | null>();

  const  [guessCountLength, setGuessCountLength] = useState<number>(0);

  const guessCountLengthHandler = (length: number) => {
    setGuessCountLength(length);
    console.log("pressed",guessCountLength)
  };

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
  };

  let screen = <StartGameScreen onPicked={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        guessedNumber={userNumber}
        onGameOver={gameOverHandler}
        ongGuessCount={guessCountLengthHandler}
      />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        guessCount={guessCountLength}
        resetGame={resetGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#a18aff", "#f9c6fb"]} style={styles.container}>
      <ImageBackground
        source={require("assets/bg1.jpg")}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:"auto",
    resizeMode: "cover"
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
