import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({addTask}) => {

  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim() != ""){
      addTask(title)
      setTitle("")
    }

  }

  const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  }); 

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder='Enter Task'
      />

      <Button
        onPress={() => handleAddTask(title)}
        title="Add Task"
      >

      </Button>

    </View>
  )
}

export default AddTask;