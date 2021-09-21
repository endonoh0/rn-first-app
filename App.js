import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
		setEnteredGoal('');
	}

  return (
    <View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
					/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList
				keyExtractor={(item, index) => item.key}
				data={courseGoals}
				renderItem={itemData => (
					<View style={styles.listItem}>
						<Text>{itemData.item.value}</Text>
					</View>
				)}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  },
	inputContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});
