import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomeLayout } from "../layouts/home/home.layout";
import { ErrorBoundary } from "../components/error/errorBoundary.component";

const DisclaimerPage = lazy(() => import("./disclaimer/disclaimer.route"));
const HomePage = lazy(() => import("./home/home.route"));
const LoginPage = lazy(() => import("./login/login.route"));
const SignUpPage = lazy(() => import("./signup/signup.route"));
const CodePage = lazy(() => import("./code/code.route"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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
      </Route>
    </>
  )
);
