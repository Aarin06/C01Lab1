import {useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {v4 as uuidv4} from 'uuid'
import AddTask from './AddTask'

const ToDoList = ( {itemList} ) => {
  const [toDos, setToDos] = useState(itemList);

  const addTask = (newTitle) => {
    setToDos((prevToDos) => [...prevToDos, {id: uuidv4.v4(), title: newTitle }]);
  }

  const removeTask = (id) => {
    setToDos((prevToDos) => prevToDos.filter((item) => item.id != id));
  }

  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
  });

  return (
    <View
      style={styles.todoListContainer}
    >
      {toDos.map((item) => {
        return (
          <View key={item.id} style={styles.todoItem}>
            <Text >
            {item.title}
            </Text>
            <Button
                onPress={() => removeTask(item.id)}
                title="Remove"
              >
            </Button>
          </View>
          
        );
      })}

      <AddTask addTask={addTask}/>
      
    </View>

  );

}

export default ToDoList;