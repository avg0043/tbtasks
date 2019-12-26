import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

const Home = () => {
  const [name, onChangeName] = useState('')
  const [time, onChangeTime] = useState('')

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
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Añadir tarea"
          />
        </View>
      </View>
      <View>

      </View>
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