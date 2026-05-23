import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./MaterialTheme/index.ts";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import ContextProvider from "./context/ContextProvider.tsx";

// GLOBAL INTEGRATION
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </StrictMode>,
);
