import {StatusBar} from 'expo-status-bar';
import {Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from "react";
import Header from './components/header'
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
    const [todo, setTodo] = useState([
        {text: 'coffee', key: '1'},
        {text: 'tea', key: '2'},
        {text: 'drink', key: '3'}])
    /* like interface in java*/
    const pressHandler = (key) => {
        setTodo((prevTodo) => {
            return prevTodo.filter(todo => todo.key != key)
        })
    }

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodo((prevTodo) => {
                return [ /* ... => everything in prevTodo , I mean everything store and add also this text  */
                    {text: text, key: Math.random().toString()},
                    ...prevTodo
                ]
            })
        } else {
            Alert.alert('OOPS!', 'Todo must be over 3 chars long', [{
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
                {text: "OK", onPress: () => console.log("OK Pressed")}])
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            console.log('dismiss')
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                {/*header*/}
                <Header/>
                <View style={styles.content}>
                    {/* to form */}
                    <AddTodo submitHandler={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList keyExtractor={((item, index) => item.key)} data={todo} renderItem={({item}) => (
                            // <Text>{item.text}</Text>
                            <TodoItem index={item} pressHandler={pressHandler}/>
                        )}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, content: {
        padding: 40,

    }, list: {
        marginTop: 20,
    }
});
