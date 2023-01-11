import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomeLayout } from "../layouts/home/home.layout";
import { ErrorBoundary } from "../components/error/errorBoundary.component";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "../components/protectedRoute/protectedRoute.component";
import { useSessionContext } from "../context/session.context";
import { UserDashboard } from "../layouts/dashboard/user.layout";
import { UserDocument } from "../components/userDocument/userDocument.component";
import LoadingIndicator from "../components/loadingIndicator/loading.component";
const DisclaimerPage = lazy(() => import("./disclaimer/disclaimer.route"));
const HomePage = lazy(() => import("./home/home.route"));
const LoginPage = lazy(() => import("./login/login.route"));
const SignUpPage = lazy(() => import("./signup/signup.route"));
const CodePage = lazy(() => import("./code/code.route"));
const MyRoutes = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();
  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };
  if (!sessionContext.redirectPath) {
    setRedirectPath("/");
  }
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<UserDashboard />}
            />
          }>
          <Route path=":id" element={<UserDocument />} />
        </Route>
      </Route>
    </Routes>
  );
};
export const ApplicationRouter = ()=> <BrowserRouter><MyRoutes/></BrowserRouter>
