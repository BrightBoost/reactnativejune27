import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Wandelen', done: false },
    { id: 2, title: 'Water drinken', done: false },
    { id: 3, title: 'Fietsen', done: false }
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ));
  }

  return (
    <View>
      <Text style={styles.progress}>
        {tasks.filter(t => t.done).length} of {tasks.length} tasks done
      </Text>
      <Text style={styles.title}>Challenge tracker</Text>
      {tasks.map((task) => (
        <Pressable key={task.id} onPress={() => toggleTask(task.id)}>
          <Text style={[styles.task, task.done && styles.taskDone]}>  {task.done ? '✅' : '⬜'} {task.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  congrats: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50', // green-ish
    textAlign: 'center',
  },
  progress: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  taskDone: {
    color: 'green',
    fontWeight: 'bold',
  },
  task: {
    fontSize: 18,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
});