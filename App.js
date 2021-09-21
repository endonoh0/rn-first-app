import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
			<View>
				<TextInput placeholder="Course Goal" style={styles.input} />
				<Button title="ADD" />
			</View>
			<View>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		padding: 50
  },
	input: {
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10
	}
});
