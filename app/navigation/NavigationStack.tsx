import * as React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import { navigationRef } from './NavigationService'

import { AppState } from 'react-native'
import { ILoginState } from 'models/reducers/login'
import Songs from 'screens/Songs'
import Melody from 'screens/Melody'
import FullScreenAndroid from 'react-native-fullscreen-chz'

const Stack = createStackNavigator()
const MelodyStack = createStackNavigator()

interface IState {
  loginReducer: ILoginState
}

interface IProps {
  theme: Theme
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props
  const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn)

  FullScreenAndroid.enable()

  AppState.addEventListener('change', () => {
    setTimeout(() => {
      FullScreenAndroid.enable()
    }, 1000)
  })

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Songs"
          component={Songs}
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            // headerRight: () => <ThemeController />,
          }}
        />
        <Stack.Screen name="Melody" component={Melody} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
