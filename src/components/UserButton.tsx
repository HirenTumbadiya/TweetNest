"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";
import { logout } from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";
import ThemeButton from "./ThemeButton";
import { useQueryClient } from "@tanstack/react-query";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();

  const queryClient = useQueryClient();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={cn("flex-none rounded-full", className)}>
            <UserAvatar avatarUrl={user?.avatarUrl} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Logged in as @{user?.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`/users/${user?.username}`}>
            <DropdownMenuLabel className="flex">
              <UserIcon className="mr-2 size-4" />
              Profile
            </DropdownMenuLabel>
          </Link>
          <DropdownMenuLabel
            onClick={() => {
              queryClient.clear();
              logout();
            }}
            className="flex cursor-pointer"
          >
            <LogOutIcon className="mr-2 size-4" />
            Logout
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeButton />
    </>
  );
}
