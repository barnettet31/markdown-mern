import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { ApplicationRouter } from "./routes/router";
import { ApiClientProvider } from "./api/api.config";
import { ThemeProvider } from "./context/theme.context";
function App() {
  return (
    <ErrorBoundary errorElement={<div>An error has occurred</div>}>
      <ApiClientProvider>
        <ThemeProvider>
          <ApplicationRouter />
        </ThemeProvider>
      </ApiClientProvider>
    </ErrorBoundary>
  );
}

export default App;
