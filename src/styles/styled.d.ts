// import original module declarations
import "styled-components";

// and extend them!
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
