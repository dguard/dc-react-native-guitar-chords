/**
 * Helper class to fixing iPhoneX UI
 */
import { Dimensions, Platform } from 'react-native'

export function isIphoneX() {
  const dimensions = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 || dimensions.width === 812)
  )
}
