import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>


    </div>
  );
}
