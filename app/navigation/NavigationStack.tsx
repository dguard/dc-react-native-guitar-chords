import * as React from 'react'
import { AppState } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ThemeController from 'components/blocks/ThemeController'
import { ILoginState } from 'models/reducers/login'
import FullScreenAndroid from 'react-native-fullscreen-chz'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import { useTheme } from 'services/store/theme'

import Melody from 'screens/Melody'
import Songs from 'screens/Songs'

import { navigationRef } from './NavigationService'

const Stack = createStackNavigator()

interface IState {
  loginReducer: ILoginState
}

function App() {
  const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn)
  const { theme } = useTheme()

  FullScreenAndroid.enable()

  AppState.addEventListener('change', () => {
    setTimeout(() => {
      FullScreenAndroid.enable()
    }, 1000)
  })

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            component={Songs}
            name="Songs"
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
          <Stack.Screen component={Melody} name="Melody" />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
