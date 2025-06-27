import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import TaskItem from '@/components/TaskItem';

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
        <TaskItem key={task.id} task={task} onPress={() => toggleTask(task.id)}></TaskItem>
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