import React, { useCallback ,useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

const Item = ({ name, time, onDelete }) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={{flex: 2}}>{name} - {time} segundos</Text>
      <Button title="Eliminar" onPress={onDelete} />
    </View>
  );
}

const Home = () => {
  const [name, onChangeName] = useState('')
  const [time, onChangeTime] = useState('')
  const [tasks, setTasks] = useState([])
  const isAddBtnDisabled = !name || !time

  const handleClickAddBtn = useCallback(
    () => {
      setTasks([...tasks, { name, time }])
    },
    [tasks, name, time]
  )

  const handleClickDeleteTask = useCallback(
    index => 
      e => {
        setTasks(tasks.filter((_, idx) => idx !== index))
      },
      [tasks]
  )

  return (
    <View>
      <View style={styles['taskCreation']}>
        <TextInput
          onChangeText={text => onChangeName(text)}
          placeholder="Introduce el nombre de la tarea"
          style={styles['taskCreation-name']}
          value={name}
        />
        <TextInput
          keyboardType="number-pad"
          onChangeText={text => onChangeTime(text)}
          placeholder="Introduce el número de segundos"
          style={styles['taskCreation-time']}
          value={time}
        />
        <View style={styles['taskCreation-addBtn']}>
          <Button
            color='#000000'
            disabled={isAddBtnDisabled}
            onPress={handleClickAddBtn}
            title="Añadir tarea"
          />
        </View>
      </View>
      {tasks.length > 0 &&
        <View>
          <FlatList
            data={tasks}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => <Item name={item.name} time={item.time} onDelete={handleClickDeleteTask(index)} />}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  'taskCreation': {
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 20
  },
  'taskCreation-name': {
    borderColor: 'gray', 
    borderWidth: 0.5,
    height: 50, 
  },
  'taskCreation-time': {
    borderColor: 'gray', 
    borderWidth: 0.5,
    height: 50, 
    marginTop: 5
  },
  'taskCreation-addBtn': {
    backgroundColor: '#f7287b',
    marginTop: 10
  }
})

export default Home