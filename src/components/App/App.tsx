import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
