import {
  ImageBackground as ImageBackgroundInternal,
  ImageBackgroundProps as ImageBackgroundPropsInternal,
} from 'react-native'
import styled from 'styled-components/native'
import { layout, LayoutProps } from 'styled-system'

type ImageBackgroundProps = LayoutProps & ImageBackgroundPropsInternal
export const ImageBackground = styled(ImageBackgroundInternal)<ImageBackgroundProps>`
  ${layout}
`
