import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [openAddMode, setOpenAddMode] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
	}

	const openAddModeHandler = () => setOpenAddMode(true);

  return (
    <View style={styles.screen}>
			<Button title="Add new goal" onPress={openAddModeHandler} />
			<GoalInput visible={openAddMode} onAddGoal={addGoalHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData =>
					<GoalItem
						id={itemData.item.id}
						onDelete={removeGoalHandler}
						title={itemData.item.value}
					/>
				}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  }
});
