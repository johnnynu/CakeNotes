"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="'max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        an all-in-one collaborative notetaking, coding, and whiteboarding tool.
        Use <span className="underline">CakeNotes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        streamline productivity and simplify collaborative work
      </h3>
      <Button>
        Get Started
        <ArrowRight className="" h-4 w-4 ml-2 />
      </Button>
    </div>
  );
};
