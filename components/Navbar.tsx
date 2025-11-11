"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show navbar if user scrolls up, or is at top of page.
      setVisible(currentY < lastY || currentY < 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
        ${
          visible
            ? "translate-y-0 bg-white/80 backdrop-blur-md shadow-md"
            : "-translate-y-full"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-xl font-bold">AsuConnect</h1>
      </div>
    </nav>
  );
}
