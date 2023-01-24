import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { ApplicationRouter } from "./routes/router";
import { ApiClientProvider } from "./api/api.config";
import { ThemeProvider } from "./context/theme.context";
import { DefaultError } from "./components/errorPage/defaultError.component";
function App() {
  return (
    <ErrorBoundary errorElement={<DefaultError />}>
      <ApiClientProvider>
        <ThemeProvider>
            <ApplicationRouter />
          
        </ThemeProvider>
      </ApiClientProvider>
    </ErrorBoundary>
  );
}

export default App;
