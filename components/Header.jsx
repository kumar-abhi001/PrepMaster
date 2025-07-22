'use client';

import { UserButton, SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "components/ui/button";
import { Code, Menu } from "lucide-react";
import { Loader2 } from "lucide-react";
import LoaderOverlay from "components/ui/LoaderOveraly";
import { useState } from "react";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">PrepMaster</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="hero" className="hidden md:inline-flex" >
                  Sign In / Login
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <Button variant="ghost" className="text-red-500 hover:text-white" onClick = {() => setIsLoading(true)}>
                  Logout
              </Button>
            </SignOutButton>
            </SignedIn>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
