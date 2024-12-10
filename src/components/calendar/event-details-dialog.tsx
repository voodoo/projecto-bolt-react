import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Event } from "@/lib/data/events";
import { format } from "date-fns";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EventDetailsDialogProps {
  event: Event | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDetailsDialog({ event, open, onOpenChange }: EventDetailsDialogProps) {
  if (!event) return null;

  const priorityColors = {
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Event Details</DialogTitle>
          <DialogDescription>
            View details for {event.title}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">{event.title}</span>
            <Badge className={cn(priorityColors[event.priority], "capitalize")}>
              {event.priority}
            </Badge>
          </div>
          {event.description && (
            <p className="text-sm text-muted-foreground">{event.description}</p>
          )}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{format(event.start, "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>All day</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span className="capitalize">{event.type}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}