import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    metrics: {
      padding: number;
      margin: number;
      borderWidth: number;
      borderRadius: number;
    };
    colors: {
      black: string;
      white: string;
      transparent: string;
    };
  }
}
