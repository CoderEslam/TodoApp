import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function AddTodo({submitHandler}) {

    const [textInput, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput style={styles.input}
                       placeholder={'new todo ...'}
                       onChangeText={(val) => changeHandler(val)}/>
            <Button title={'add Todo'} onPress={()=>{submitHandler(textInput)}} color={'coral'}/>
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})


