import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  blackColor: string;
  blueColor: string;
  greyColor: string;
  lightGreyColor: string;
  lightYellowColor: string;
  pinkColor: string;
  whiteColor: string;
  yellowColor: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
