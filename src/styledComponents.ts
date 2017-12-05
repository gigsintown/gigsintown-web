import * as styledComponents from 'styled-components';
import { Theme } from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, withTheme };
export default styled;
