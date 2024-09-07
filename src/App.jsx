import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding.jsx";
import Job from "./pages/job";
import JobListing from "./pages/JobListing";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import MyJobs from "./pages/MyJobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";
import Loggin from "./pages/Loggin";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/loggin",
        element: <Loggin />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
