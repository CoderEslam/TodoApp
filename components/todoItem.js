import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function TodoItem({index, pressHandler} /* like constructor */) {
    return (<TouchableOpacity onPress={() => pressHandler(index.key)}>
            <Text style={styles.item}>{index.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
