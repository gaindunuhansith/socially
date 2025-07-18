import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" >
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>

      <ModeToggle />
      


    </div>
  );
}
