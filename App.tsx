import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import GoalList from "./src/components/GoalList";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function handleGoalInput(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => {
      return ([ ...currentCourseGoals, { key: Math.random().toString(), text: enteredGoalText }]);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInput}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button onPress={handleAddGoal} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <GoalList courseGoals={courseGoals}/>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
