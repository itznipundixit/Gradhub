import { Button } from "./ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="text-xl font-bold">GradHub</span>
        </div>
        <nav>
          <Button variant="ghost">Sign In</Button>
        </nav>
      </div>
    </header>
  );
}