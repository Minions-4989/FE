import ReactDOM from "react-dom/client";
import Routers from "./routers/Routers";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
    <RouterProvider router={Routers} />
    </Provider>
  </ThemeProvider>
);
