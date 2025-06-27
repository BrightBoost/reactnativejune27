import React from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export default function TaskItem({ task, onPress }) {

    const getStyle = () => {
        if (task.done) {
            return styles.done;
        } else {
            return styles.normal;
        }
    };

    const getEmoji = () => {
        if (task.done) {
            return '✅';
        } else {
            return '⬜';
        }
    };

    return (
        <Pressable onPress={onPress}>
            <Text style={[styles.task, getStyle()]}>
                {getEmoji()} {task.title}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    task: {
        fontSize: 18,
        marginBottom: 15,
    },
    done: {
        color: 'green',
        fontWeight: 'bold',
    },
    normal: {
        color: '#333',
    },
});

