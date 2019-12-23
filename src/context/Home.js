import React, { useState } from 'react'
import { Alert, Button, TextInput, View } from 'react-native'

const Home = () => {
  const [value, onChangeText] = useState('')

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        error="hola"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}

export default Home