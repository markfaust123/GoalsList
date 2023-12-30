import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import GoalList from "./src/components/GoalList";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function handleGoalInput(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onInput={handleGoalInput} onAddGoal={handleAddGoal} />
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
  goalsContainer: {
    flex: 5,
  },
});
