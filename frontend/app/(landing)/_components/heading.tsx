"use client";
import UseAuth from "@/auth";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = UseAuth();
  return (
    <div className="'max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        an all-in-one collaborative tool. Use{" "}
        <span className="underline">CakeNotes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        streamline productivity and simplify collaborative work
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <Button>
          Get Started
          <ArrowRight className="" h-4 w-4 ml-2 />
        </Button>
      )}
    </div>
  );
};
