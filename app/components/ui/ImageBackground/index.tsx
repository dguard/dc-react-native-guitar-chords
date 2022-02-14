import {
  ImageBackground as ImageBackgroundInternal,
  ImageBackgroundProps as ImageBackgroundPropsInternal,
} from 'react-native'
import styled, { css } from 'styled-components/native'
import { layout, LayoutProps, styleFn } from 'styled-system'

type ImageBackgroundProps = LayoutProps &
  ImageBackgroundPropsInternal & {
    fullWidth?: boolean
    fullHeight?: boolean
  }

const fullWidthCss: styleFn = ({ fullWidth }: ImageBackgroundProps) =>
  fullWidth &&
  css`
    width: 100%;
  `
const fullHeightCss: styleFn = ({ fullHeight }: ImageBackgroundProps) =>
  fullHeight &&
  css`
    height: 100%;
  `

export const ImageBackground = styled(ImageBackgroundInternal)<ImageBackgroundProps>`
  ${layout}

  ${fullWidthCss}
  ${fullHeightCss}
`
