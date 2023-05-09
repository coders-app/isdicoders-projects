import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      primary: string;
    };
    texts: {
      main: {
        size: string;
        color: string;
      };
    };
  }
}
