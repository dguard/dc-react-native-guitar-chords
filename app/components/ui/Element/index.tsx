import styled, { css } from 'styled-components/native'
import { View } from 'react-native'
import {
  backgroundColor,
  BackgroundColorProps,
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
  BackgroundColorProps & {
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
  ${backgroundColor}
  ${justifyCenterCss}
`

export const Row = styled(Element)<ElementProps>`
  flex-direction: row;
`

export const Column = styled(Element)<ElementProps>`
  flex-direction: column;
`
