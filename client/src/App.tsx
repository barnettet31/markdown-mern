import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { router } from "./routes/router";
import useDarkMode from "./hooks/darkMode";

function App() {
  const data = useDarkMode();
  console.log(data);
  return (
    <ErrorBoundary errorElement={<div>An error has occurred</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
