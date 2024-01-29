import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface OgProps{
  guessNumber: number | null
  handleHigher : () => void
  handleLower : () => void
}

const OpponentGuess:React.FC<OgProps> = ({guessNumber, handleHigher, handleLower }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <Text>{guessNumber}</Text>
        <View style={styles.buttonWrapper}>
          <Button onPress={handleHigher} title="+ higher" color="#841584" />
          <Button onPress={handleLower} title="- lower" color="#841584" />
        </View>
      </View>
    </View>
  );
};

export default OpponentGuess;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    justifyContent: "center",
    height: "100%",
  },
  wrapper: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  buttonWrapper:{
    flexDirection:"row",
    gap:20
  }
});
