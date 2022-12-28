import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { router } from "./routes/router";
import useDarkMode from "./hooks/darkMode";
import { ApiClientProvider } from "./api/api.config";

function App() {
  const data = useDarkMode();
  return (
    <ErrorBoundary errorElement={<div>An error has occurred</div>}>
      <ApiClientProvider>
        <RouterProvider router={router} />
      </ApiClientProvider>
    </ErrorBoundary>
  );
}

export default App;
