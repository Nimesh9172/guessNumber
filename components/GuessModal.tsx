import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

interface GuessModalProps{
  isVisible:boolean
}

const GuessModal:React.FC<GuessModalProps> = ({isVisible}) => {
  const [enteredNumber, setEnteredNumber] = useState<string | null>("");

  const handleTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setEnteredNumber(numericValue);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <Text>Enter Number</Text>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleTextChange}
          style={styles.textInput}
          placeholder="Your Goals..."
          placeholderTextColor="#fff"
        />
        <Button
          onPress={() => setEnteredNumber("")}
          title="Reset"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Confirm"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </Modal>
  );
};

export default GuessModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "#e4d0ff",
    borderWidth: 2,
    borderRadius: 10,
  },
});
