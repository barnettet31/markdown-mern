import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/error/errorBoundary.component";
import { router } from "./routes/router";

function App() {
  return (
    <ErrorBoundary errorElement={<div>An error has occurred</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
