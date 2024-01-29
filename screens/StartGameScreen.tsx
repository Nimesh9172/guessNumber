import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "components/PrimaryButton";
import Title from "components/Title";
import Card from "components/UI/Card";
import InstructorText from "components/UI/InstructorText";

interface SGProps {
  onPicked: (pickedNumber: number) => void;
}

const StartGameScreen: React.FC<SGProps> = ({ onPicked }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const inputChangeHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 to 99.", [
        { text: "Okay", style: "destructive" },
      ]);
    }
    onPicked(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <View style={styles.cardWrapper}>
        <Card>
          <InstructorText>Enter a number</InstructorText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            selectionColor="white"
            onChangeText={inputChangeHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: "100%",
    marginTop: 100,
    paddingHorizontal: 20,
  },
  cardWrapper:{
    marginTop:30
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: "#fff",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    marginHorizontal: "auto",
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: 20,
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "center",
  },
});

export default StartGameScreen;
