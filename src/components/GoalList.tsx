import { FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ courseGoals }: { courseGoals: Goal[] }) => {
    return (
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem content={itemData.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.text + index;
        }}
      />
    );
}

export default GoalList;