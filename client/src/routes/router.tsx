import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts/home/home.layout";
import { ErrorBoundary } from "../components/error/errorBoundary.component";
import ProtectedRoute from "../components/protectedRoute/protectedRoute.component";
import { UserDashboard } from "../layouts/dashboard/user.layout";
import { UserDocument } from "./userDocument/userDocument.route";
import { Welcome } from "./welcome/welcome.route";
import { ErrorPage } from "../components/errorPage/errorPageComponent";
import LoadingIndicator from "../components/loadingIndicator/loading.component";
const DisclaimerPage = lazy(() => import("./disclaimer/disclaimer.route"));
const HomePage = lazy(() => import("./home/home.route"));
const LoginPage = lazy(() => import("./login/login.route"));
const SignUpPage = lazy(() => import("./signup/signup.route"));
const CodePage = lazy(() => import("./code/code.route"));
const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/signup"
          element={
            <ErrorBoundary errorElement={<div>Oops...</div>}>
              <SignUpPage />
            </ErrorBoundary>
          }
        />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/code" element={<CodePage />} />
      </Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }>
        <Route path="/welcome" index element={<Welcome />} />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <ErrorBoundary errorElement={<ErrorPage/>}>
                <Suspense fallback={<LoadingIndicator/>}>
                <UserDocument />
              </Suspense>
              </ErrorBoundary>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
export const ApplicationRouter = () => (
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>
);
