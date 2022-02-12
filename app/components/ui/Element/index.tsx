import { View } from 'react-native'
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

type ElementProps = MarginProps &
  PaddingProps &
  LayoutProps &
  ColorProps & {
    justifyCenter?: boolean
  }
const justifyCenterCss: styleFn = ({ justifyCenter }: ElementProps) =>
  justifyCenter &&
  css`
    justify-content: center;
  `

const Element = styled(View)`
  ${padding}
  ${margin}
  ${layout}
  ${color}
  ${justifyCenterCss}
`

export const Row = styled(Element)<ElementProps>`
  flex-direction: row;
`

export const Column = styled(Element)<ElementProps>`
  flex-direction: column;
`
