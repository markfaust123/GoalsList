import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ goal, onDelete }: { goal: Goal, onDelete: Function }) => {
  return (
    <Pressable
      android_ripple={{ color: "#2E0465" }}
      onPress={onDelete.bind(this, goal.id)}
      style={({pressed}) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
