import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// BELOW PAGES
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const FormPage = React.lazy(() => import("./pages/FormPage"));
const Lyrics = React.lazy(() => import("./pages/Lyrics"));
const Player = React.lazy(() => import("./pages/Player"));
const Error = React.lazy(() => import("./pages/Error"));

// BELOW COMPONENTS
import PreLoading from "./components/PreLoading";
import ScrollTopBack from "./components/ScrollTopBack";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set your desired timeout duration

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures useEffect runs only on mount
  return (
    <>
      {loading ? (
        <PreLoading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <Register />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="/formpage"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <FormPage />
              </React.Suspense>
            }
          />
          <Route
            path="/lyrics"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <Lyrics />
              </React.Suspense>
            }
          />
          <Route
            path="/player"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <Player />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<PreLoading />}>
                <Error />
              </React.Suspense>
            }
          />
        </Routes>
      )}
      <ScrollTopBack />
    </>
  );
}

export default App;
