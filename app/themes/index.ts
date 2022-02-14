import main from './main'

const themes = {
  main,
}
export type Theme = keyof typeof themes
export default themes
