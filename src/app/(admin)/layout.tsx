"use client"

import React, { useState } from "react"

import Link from "next/link"
import Image from "next/image"

import {
  BarChart3,
  Box,
  CreditCard,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function LayoutAdmin({children} : {children: React.ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}>
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="h-6 w-6" />
            <span>StyleStore Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Dashboard
            </h2>
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                <LayoutDashboard className="h-4 w-4" />
                -
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <BarChart3 className="h-4 w-4" />
                -
              </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Store Management
            </h2>
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Box className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="/admin/category"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <ShoppingCart className="h-4 w-4" />
                Categories
              </Link>
              <Link
                href="/admin/brand"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Users className="h-4 w-4" />
                Brand
              </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Settings</h2>
            <div className="space-y-1">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Settings className="h-4 w-4" />
                -
              </Link>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Home className="h-4 w-4" />
                -
              </Link>
              <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                <LogOut className="h-4 w-4" />
                -
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Admin */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
          <div className="relative w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32&text=A"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        
        {/* Main Content */}
        <main className="overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>    
  )
}