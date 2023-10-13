import ReactDOM from 'react-dom/client';
import Routers from './routers/Routers';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      {/* <Provider store={store}> */}
      <RouterProvider router={Routers} />
    </AuthProvider>
    {/* </Provider> */}
  </ThemeProvider>
);
