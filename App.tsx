import React from "react";
import Routes from "routes";
import theme from "styles";
import { ThemeProvider } from "styled-components";
import AuthProvider from "contexts/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
