"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          🌱 Grow a Garden Recipes
        </Link>
        <nav className="flex gap-4">
          <Link href="/recipes">
            <Button variant="ghost">Recipes</Button>
          </Link>
          <Link href="/growing-tips">
            <Button variant="ghost">Growing Tips</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}