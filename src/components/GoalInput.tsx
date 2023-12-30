import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({
  onAddGoal,
  onCancel,
  visible,
}: {
  onAddGoal: (goalText: string) => void;
  onCancel: Function;
  visible: boolean;
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInput}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel.bind(this)}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});

export default GoalInput;
