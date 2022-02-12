import { ImageBackground as ImageBackgroundInternal } from 'react-native'
import styled from 'styled-components/native'
import {
  ImageBackgroundProps as ImageBackgroundPropsInternal,
  layout,
  LayoutProps,
} from 'styled-system'

type ImageBackgroundProps = LayoutProps & ImageBackgroundPropsInternal
export const ImageBackground = styled(ImageBackgroundInternal)<ImageBackgroundProps>`
  ${layout}
`
