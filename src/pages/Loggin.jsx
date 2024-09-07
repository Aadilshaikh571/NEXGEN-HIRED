import { SignInButton } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";

const Loggin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Please Sign In</h1>
        <p className="text-gray-600 mb-6 text-center">
          To access the full features of our platform, please log in using your credentials.
        </p>
        <div className="flex justify-center">
          <SignInButton mode="modal" afterSignInUrl="/">
            <Button variant="blue" size="lg">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
