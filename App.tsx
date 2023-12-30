import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import GoalList from "./src/components/GoalList";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function handleAddGoal(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal} />
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
