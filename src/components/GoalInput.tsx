import { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({
  onAddGoal,
}: {
  onAddGoal: (goalText: string) => void;
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function handleGoalInput(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalInput}
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
