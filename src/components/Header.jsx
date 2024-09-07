import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import {
  BriefcaseBusiness,
  BriefcaseBusinessIcon,
  Heart,
  PenBox,
} from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  });
  return (
    <div>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </Link>
        <div className="flex gap-8 ">
          <SignedOut>
            {/* Use the SignInButton component from Clerk */}
            <SignInButton mode="modal">
              <Button variant="outline" onClick={() => setShowSignIn(true)}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          >
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="blue" className="rounded-full">
                  <PenBox size={20} className="mr-2"/>
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My job"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
