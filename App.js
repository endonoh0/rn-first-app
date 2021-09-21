import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
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
			<View>
			</View>
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
	}
});
