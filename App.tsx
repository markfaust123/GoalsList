import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalList from "./src/components/GoalList";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function handleStartAddGoal() {
    setModalIsVisible(true);
  }

  function handleEndAddGoal() {
    setModalIsVisible(false);
  }

  function handleAddGoal(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    handleEndAddGoal();
  }

  function handleDeleteGoal(id: string) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={handleStartAddGoal}/>
      <GoalInput onAddGoal={handleAddGoal} onCancel={handleEndAddGoal} visible={modalIsVisible} />
      <View style={styles.goalsContainer}>
        <GoalList
          courseGoals={courseGoals}
          handleDeleteGoal={handleDeleteGoal}
        />
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
