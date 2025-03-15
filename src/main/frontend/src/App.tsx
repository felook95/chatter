import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from 'react-oidc-context';
import Themes from './themes';
import oidcConfig from './oidcConfig';

const App = () => {
  return (
    <AuthProvider {...oidcConfig}>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
