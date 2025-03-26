"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"; // <-- import for the toggle

export default function NavBar() {
  /**
   * We use Tailwind's `dark:` class to style the topbar differently
   * based on the current theme. By default it will show 'bg-white text-pink-500'
   * for light mode, and for dark mode 'bg-black text-pink-500' automatically
   * (because next-themes adds 'dark' class to the html element when in dark mode).
   */
  return (
    <TooltipProvider>
      <header className="bg-white text-pink-500 dark:bg-black dark:text-pink-500 transition-colors duration-200">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🥳</span>
            <span className="font-bold text-xl">Factorial</span>
          </div>
          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Dashboard
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Central overview, strategy performance, alerts, quick actions</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Strategies
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Build, customize, browse, and manage factor-based strategies</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Backtest
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Historical backtesting and scenario analysis tools</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Portfolio
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Real-time portfolio tracking, automation, rebalancing</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Insights
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>AI-driven analytics, market signals, factor research, heatmaps</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Marketplace
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Community-shared strategies, premium templates, expert-curated factor blends
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Resources
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Documentation, educational content, FAQs, tutorials</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Account
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>User settings, subscription, integrations, support</p>
              </TooltipContent>
            </Tooltip>
            {/* Mode Toggle button */}
            <ModeToggle />
          </div>
        </nav>
      </header>
    </TooltipProvider>
  );
}
