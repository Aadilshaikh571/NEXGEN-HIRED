import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  // If user is not signed in, redirect to the login page
  if (isLoaded && !isSignedIn) {
    return <Navigate to="/loggin" />;
  }

  // If the user is signed in but the role is not set, redirect to onboarding
  if (user !==undefined && !user?.unsafeMetadata?.role && pathname !=="/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  // If the user has a role, allow access to the requested route
  return children;
};

export default ProtectedRoute;
