import { Alert, StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

import Title from "components/Title";
import NumberContainer from "components/UI/NumberContainer";
import PrimaryButton from "components/PrimaryButton";
import Card from "components/UI/Card";
import InstructorText from "components/UI/InstructorText";
import GuessLogItem from "components/GuessLogItem";

interface GuessItem {
  id: number;
  guessNo: number;
}

type GuessCountState = GuessItem[];

const generateRandomNumber = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min + 1) + min);

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary: number = 1;
let maxBoundary: number = 100;

const GameScreen = ({ guessedNumber, onGameOver, ongGuessCount }) => {
  const initialGuess = generateRandomNumber(1, 100, guessedNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessCountList, setGuessCountList] = useState<GuessCountState>([]);

  useEffect(() => {
    if (currentGuess === guessedNumber) {
      onGameOver();
    }
  }, [guessedNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessCountListLength = guessCountList.length;

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < guessedNumber) ||
      (direction === "higher" && currentGuess > guessedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNUmber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNUmber);
    setGuessCountList((prev) => [
      { id: Math.random(), guessNo: newRndNUmber },
      ...prev,
    ]);
    console.log(guessCountList);
    ongGuessCount(guessCountListLength);
  };

  return (
    <View style={styles.mainContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.cardWrapper}>
        <Card>
          <InstructorText>Higher or lower?</InstructorText>

          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <FontAwesome6 name="minus" size={20} />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <FontAwesome6 name="add" size={20} />
            </PrimaryButton>
          </View>
        </Card>
      </View>
      {/* {guessCountList.map((item) => (
          <Text>{item.guessNo}</Text>
        ))} */}
      <View style={styles.listWrapper}>
        <FlatList
          data={guessCountList}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessCountListLength - index}
              guess={item.guessNo}
            />
          )}
          keyExtractor={(item) => item.id.toLocaleString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 100,
    padding: 24,
    height: "100%",
  },
  cardWrapper:{
    marginTop:15,
    flex:1
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  listWrapper: {
    marginTop:10,
    flex:4
  },
});

export default GameScreen;
