import React from 'react'
import { Switch } from 'react-native'
import { IThemeState } from 'models/reducers/theme'
import { useDispatch, useSelector } from 'react-redux'

import * as themeActions from 'store/actions/themeActions'

import { Row } from './styles'

interface IState {
  themeReducer: IThemeState
}

const ThemeController: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark)

  const dispatch = useDispatch()
  const handleToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark) as any)

  return (
    <Row mx={12} my={12} alignCenter justifyEnd>
      <Switch value={isDark} onValueChange={handleToggleTheme} />
    </Row>
  )
}

export default ThemeController
