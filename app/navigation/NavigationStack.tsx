import * as React from 'react'
import { AppState } from 'react-native'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ILoginState } from 'models/reducers/login'
import FullScreenAndroid from 'react-native-fullscreen-chz'
import { useSelector } from 'react-redux'

import Melody from 'screens/Melody'
import Songs from 'screens/Songs'

import { navigationRef } from './NavigationService'

const Stack = createStackNavigator()

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
          component={Songs}
          name="Songs"
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            // headerRight: () => <ThemeController />,
          }}
        />
        <Stack.Screen component={Melody} name="Melody" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
