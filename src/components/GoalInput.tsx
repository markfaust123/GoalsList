import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({
  onInput,
  onAddGoal,
}: {
  onInput: (enteredText: string) => void;
  onAddGoal: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onInput}
        style={styles.textInput}
        placeholder="Your course goal!"
      />
      <Button onPress={onAddGoal} title="Add Goal" />
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
