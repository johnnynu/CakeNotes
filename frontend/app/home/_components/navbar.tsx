"use client";
import UseAuth from "@/auth";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Spinner } from "../../../components/spinner";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { authSignOut, isLoading, isAuthenticated, user } = UseAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap--x-2 p-2">
        {isLoading && <Spinner />}
        {isAuthenticated && !isLoading && (
          <>
            <div className="flex-grow text-center">CakeNotes</div>
          </>
        )}
        {isAuthenticated && user && (
          <>
            <Avatar>
              <AvatarImage src={user.photoURL || undefined} alt="User Avatar" />
              <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div style={{ marginRight: "8px" }} />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="mr-2" variant="ghost" size="sm">
                  <TextAlignJustifyIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {user?.displayName || "user"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={authSignOut}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
