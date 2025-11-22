import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      <h1
        className="btn btn-secondary"
        onClick={() => toast.success("Success Toast")}
      >
        Welcome
      </h1>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton mode="modal" />
      </SignedIn>

      <UserButton />
    </div>
  );
}

export default HomePage;
