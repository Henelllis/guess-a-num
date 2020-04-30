import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard //api to interact with
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Theme from "../constants/colors";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const numberInputHandler = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text> Chosen Number : {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.gameScreen}>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a Number</Text>
          <Input
            blurOnSubmit
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Theme.accent}
                title="Reset"
                onPress={() => resetInputHandler()}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Theme.primary}
                style={styles.button}
                title="Confirm"
                onPress={() => confirmInputHandler()}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 36, //cope with padding from device
    alignItems: "center"
    // justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 80
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
