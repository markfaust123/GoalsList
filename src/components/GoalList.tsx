import { FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ courseGoals, handleDeleteGoal }: { courseGoals: Goal[], handleDeleteGoal: Function }) => {
    return (
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem goal={itemData.item} onDelete={handleDeleteGoal} />;
        }}
        keyExtractor={(item, index) => {
          return item.text + index;
        }}
      />
    );
}

export default GoalList;