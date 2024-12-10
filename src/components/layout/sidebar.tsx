import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, Users, Folders, CalendarDays, Search } from "lucide-react";
import { NavLink } from "./nav-link";
import { CommandMenu } from "@/components/search/command-menu";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="hidden md:flex items-center px-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <div className="relative p-2 bg-background rounded-lg ring-1 ring-pink-500/20">
                  <div className="w-6 h-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-[2px] bg-background rounded-[5px] transform rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Projecto
              </h2>
            </div>
          </div>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start gap-2"
              onClick={() => setCommandOpen(true)}
            >
              <Search className="h-4 w-4" />
              Search
              <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              <NavLink icon={Users} href="/customers">
                Customers
              </NavLink>
              <NavLink icon={Folders} href="/projects">
                Projects
              </NavLink>
              <NavLink icon={CalendarDays} href="/calendar">
                Calendar
              </NavLink>
            </div>
          </ScrollArea>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <ScrollArea className="px-1">
            <div className="space-y-1">
              <NavLink icon={Settings} href="/settings">
                Preferences
              </NavLink>
            </div>
          </ScrollArea>
        </div>
      </div>
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}