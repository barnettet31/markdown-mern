import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { ApplicationRouter } from "./routes/router";
import { ApiClientProvider } from "./api/api.config";
import { ThemeProvider } from "./context/theme.context";
import { DefaultError } from "./components/errorPage/defaultError.component";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionContext, SessionContextProvider } from "./context/session.context";
function App() {
  return (
    <ErrorBoundary errorElement={<DefaultError />}>
      <ApiClientProvider>
        <ThemeProvider>
          <SessionContextProvider>
            <ApplicationRouter />
          </SessionContextProvider>
        </ThemeProvider>
      </ApiClientProvider>
    </ErrorBoundary>
  );
}

export default App;
