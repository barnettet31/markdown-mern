import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "../layouts/home/home.layout";
const Disclaimer = lazy(() => import("./disclaimer/disclaimer.route"));
const HomePage = lazy(() => import("./home/home.route"));
const LoginPage = lazy(() => import("./login/login.route"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Suspense>
      </>
    </Route>
  )
);
