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
      title: 'TB TASKS',
      headerStyle: {
        backgroundColor: '#f7287b',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)
const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />
}

export default App