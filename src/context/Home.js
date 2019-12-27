import React, { useCallback ,useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

const Item = ({ name, time, onDelete }) => {
  return (
    <View style={styles['tasksList-item']}>
      <Text style={styles['tasksList-item--title']}>{name} - {time} segundos</Text>
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
      <View>
        <Text style={styles['mainTitle']}>Nueva Tarea</Text>
      </View>
      <View style={styles['taskCreation']}>
        <TextInput
          onChangeText={text => onChangeName(text)}
          placeholder="Nombre"
          placeholderTextColor="#ffffff"
          style={styles['taskCreation-name']}
          value={name}
        />
        <TextInput
          keyboardType="number-pad"
          onChangeText={text => onChangeTime(text)}
          placeholder="Número de segundos"
          placeholderTextColor="#ffffff"
          style={styles['taskCreation-time']}
          value={time}
        />
        <View style={styles['taskCreation-addBtn']}>
          <Button
            color="#ffffff"
            fontWeight="bold"
            disabled={isAddBtnDisabled}
            onPress={handleClickAddBtn}
            title="Añadir"
          />
        </View>
      </View>
      {tasks.length > 0 &&
        <View style={styles['tasksList']}>
          <Text style={styles['tasksList-title']}>Lista de Tareas</Text>
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
  'mainTitle': {
    color: '#ffffff', 
    fontSize: 25, 
    fontWeight: 'bold', 
    marginLeft: 30, 
    marginTop: 5
  },
  'taskCreation': {
    backgroundColor: '#1c1c1e',
    borderRadius: 20,
    marginLeft: 25, 
    marginRight: 25,
    marginTop: 5,
    padding: 30,
  },
  'taskCreation-name': {
    borderColor: 'gray', 
    borderWidth: 0.5,
    color: '#ffffff', 
    height: 50, 
    paddingLeft: 10
  },
  'taskCreation-time': {
    borderColor: 'gray', 
    borderWidth: 0.5,
    color: '#ffffff',
    height: 50, 
    marginTop: 5,
    paddingLeft: 10
  },
  'taskCreation-addBtn': {
    backgroundColor: '#1184f1',
    marginTop: 10
  },
  'tasksList': {
    marginLeft: 25, 
    marginRight: 25,
    marginTop: 15,
  },
  'tasksList-title': {
    color: '#ffffff', 
    fontSize: 25, 
    fontWeight: 'bold', 
    paddingLeft: 5
  },
  'tasksList-item': {
    backgroundColor: '#1c1c1e', 
    borderRadius: 20,
    flex: 1, 
    flexDirection: 'row', 
    marginTop: 10
  },
  'tasksList-item--title': {
    color: '#ffffff', 
    flex: 2, 
    paddingLeft: 10, 
    paddingTop: 10
  }
})

export default Home