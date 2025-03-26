"use client";

import React from "react";
import { Roboto_Slab } from "next/font/google";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

// Import Roboto Slab at a suitable weight for your nav branding
const robotoSlab = Roboto_Slab({
  weight: "700",
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <TooltipProvider>
      <header className="bg-white text-pink-500 dark:bg-black dark:text-pink-500 transition-colors duration-200">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
          {/* Left side: Branding + Nav Items */}
          <div className="flex items-center">
            {/* Logo & Title */}
            <div className="flex items-center space-x-2 mr-6">
              <span
                className={`${robotoSlab.className} text-xl font-bold`}
              >
                F☄️ctorial
              </span>
            </div>
            {/* Main Nav Items */}
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
            </div>
          </div>

          {/* Right side: Account, Log out, Mode Toggle */}
          <div className="flex items-center space-x-4">
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

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hover:text-pink-300">
                  Log Out
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Log out of your account</p>
              </TooltipContent>
            </Tooltip>

            <ModeToggle />
          </div>
        </nav>
      </header>
    </TooltipProvider>
  );
}
