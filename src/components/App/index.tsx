import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/defaultTheme';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Main from '../Main';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}
