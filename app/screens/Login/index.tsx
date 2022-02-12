import React from 'react'
import { View } from 'react-native'
import { ILoginState } from 'models/reducers/login'
import { Button, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import NavigationService from 'navigation/NavigationService'

import * as loginActions from 'store/actions/loginActions'

import styles from './styles'

interface IState {
  loginReducer: ILoginState
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id)
  const dispatch = useDispatch()
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'))
  const onForgot = () => NavigationService.navigate('ForgotPassword')
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button labelStyle={styles.labelStyle} mode="text" style={styles.forgot} onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    </View>
  )
}

export default Login
