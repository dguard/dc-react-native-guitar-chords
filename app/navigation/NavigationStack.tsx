import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import {AppState, StatusBar} from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import Songs from "app/screens/Songs";
import Melody from "app/screens/Melody";
import FullScreenAndroid from "react-native-fullscreen-chz";

const Stack = createStackNavigator();
const MelodyStack = createStackNavigator();

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const MelodyNavigator = () => {

    return (
        <MelodyStack.Navigator>
            <Stack.Screen
                name="Melody"
                component={Melody}>
            </Stack.Screen>
        </MelodyStack.Navigator>
    )
};

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

    FullScreenAndroid.enable();

    AppState.addEventListener('change', () => {
        setTimeout(() => {
            FullScreenAndroid.enable();
        }, 1000);
    });

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>

      <Stack.Navigator screenOptions={{
          headerShows: false
      }}
        headerMode="none">
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
          <Stack.Screen
              name="Melody"
              component={Melody}>
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
