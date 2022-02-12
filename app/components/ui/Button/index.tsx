import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  styleFn,
} from 'styled-system'

type ButtonProps = ColorProps &
  LayoutProps &
  PaddingProps &
  MarginProps & {
    borderTop?: boolean
  }

const borderTopCss: styleFn = ({ borderTop }: ButtonProps) =>
  borderTop &&
  css`
    border-top-width: 1px;
    border-top-color: #fff;
  `

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${color}
  ${layout}
  ${margin}
  ${padding}

  ${borderTopCss}
`
