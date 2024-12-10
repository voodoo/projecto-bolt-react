import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { customers } from "@/lib/data/customers";
import { projects } from "@/lib/data/projects";
import { events } from "@/lib/data/events";
import { Calendar, Folder, Users } from "lucide-react";
import { DialogTitle } from "@/components/ui/dialog";

interface SearchItem {
  id: string;
  type: "customer" | "project" | "event";
  title: string;
  subtitle: string;
  url: string;
}

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const allItems: SearchItem[] = [
    ...customers.map((customer) => ({
      id: customer.id,
      type: "customer",
      title: customer.name,
      subtitle: customer.email,
      url: "/customers",
    })),
    ...projects.map((project) => ({
      id: project.id,
      type: "project",
      title: project.name,
      subtitle: project.description,
      url: "/projects",
    })),
    ...events.map((event) => ({
      id: event.id,
      type: "event",
      title: event.title,
      subtitle: event.description || "No description",
      url: "/calendar",
    })),
  ];

  const groupedItems = {
    customers: allItems.filter((item) => item.type === "customer"),
    projects: allItems.filter((item) => item.type === "project"),
    events: allItems.filter((item) => item.type === "event"),
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groupedItems.customers.length > 0 && (
          <CommandGroup heading="Customers">
            {groupedItems.customers.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  navigate(item.url);
                  onOpenChange(false);
                }}
              >
                <Users className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.subtitle}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {groupedItems.projects.length > 0 && (
          <CommandGroup heading="Projects">
            {groupedItems.projects.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  navigate(item.url);
                  onOpenChange(false);
                }}
              >
                <Folder className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.subtitle}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {groupedItems.events.length > 0 && (
          <CommandGroup heading="Events">
            {groupedItems.events.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  navigate(item.url);
                  onOpenChange(false);
                }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.subtitle}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}