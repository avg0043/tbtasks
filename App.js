import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/Home'

const RootStack = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '[TB-TSK]',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)
const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer theme="dark" />
}

export default App