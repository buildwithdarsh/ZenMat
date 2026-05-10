"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu, Search, Bell, Flame, Heart,
  User, Settings, LogOut, LayoutDashboard,
} from "lucide-react";

const navLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/classes", label: "Classes" },
  { href: "/studios", label: "Studios" },
  { href: "/on-demand", label: "On-Demand" },
  { href: "/meditation", label: "Meditation" },
  { href: "/community", label: "Community" },
  { href: "/workshops", label: "Workshops" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">Z</span>
          </div>
          <span className="text-xl font-bold tracking-tight">ZenMat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-4" />
            <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive" />
          </Button>

          {/* Streak indicator */}
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium">
            <Flame className="size-3.5" />
            <span>12</span>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="relative h-8 w-8 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/id/251/200/200" alt="Anya" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://picsum.photos/id/251/200/200" alt="Anya" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Anya Petrova</p>
                  <p className="text-xs text-muted-foreground">Premium Member</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/progress" className="flex items-center w-full"><User className="mr-2 size-4" />My Progress</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/schedule" className="flex items-center w-full"><Heart className="mr-2 size-4" />My Schedule</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/dashboard" className="flex items-center w-full"><LayoutDashboard className="mr-2 size-4" />Studio Dashboard</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/pricing" className="flex items-center w-full"><Settings className="mr-2 size-4" />Membership</Link></DropdownMenuItem>
              <DropdownMenuItem><LogOut className="mr-2 size-4" />Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted transition-colors">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 border-t" />
                <Link href="/retreats" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">Retreats</Link>
                <Link href="/teacher-training" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">Teacher Training</Link>
                <Link href="/pranayama" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">Pranayama</Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">Blog</Link>
                <Link href="/pricing" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">Pricing</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
