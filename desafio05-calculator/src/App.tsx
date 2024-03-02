import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./Home";
import { GlobalStyle } from "./styles/themes/global";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home /> 

      <GlobalStyle />
    </ThemeProvider>
  )
}
