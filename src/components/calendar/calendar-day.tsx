import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Event } from "@/lib/data/events";
import { format } from "date-fns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CalendarDayProps {
  date: Date;
  isToday?: boolean;
  isCurrentMonth?: boolean;
  events: Event[];
  onEventClick: (event: Event) => void;
}

export function CalendarDay({ date, isToday, isCurrentMonth, events, onEventClick }: CalendarDayProps) {
  const maxDisplayEvents = 3;
  const hasMoreEvents = events.length > maxDisplayEvents;
  const displayEvents = events.slice(0, maxDisplayEvents);

  return (
    <Card className={cn(
      "h-36 p-2",
      !isCurrentMonth && "bg-muted/50",
      "hover:shadow-md transition-shadow",
      isToday && "ring-2 ring-primary ring-offset-2"
    )}>
      <div className="flex justify-between items-center">
        <span className={cn(
          "text-sm font-medium",
          isToday && "text-primary",
          !isCurrentMonth && "text-muted-foreground"
        )}>
          {format(date, 'd')}
        </span>
        {isToday && (
          <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
            Today
          </span>
        )}
      </div>
      <div className="mt-2 space-y-1">
        {displayEvents.map((event) => (
          <TooltipProvider key={event.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onEventClick(event)}
                  className={cn(
                    "w-full text-left text-xs px-2 py-1 rounded-md transition-colors",
                    "hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-1",
                    event.priority === 'high' && "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-100",
                    event.priority === 'medium' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-100",
                    event.priority === 'low' && "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100"
                  )}
                >
                  <div className="flex items-center gap-1">
                    <span className={cn(
                      "w-1 h-1 rounded-full",
                      event.type === 'meeting' && "bg-purple-500",
                      event.type === 'task' && "bg-green-500",
                      event.type === 'reminder' && "bg-blue-500"
                    )} />
                    <span className="truncate">{event.title}</span>
                  </div>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-xs">
                  <p className="font-medium">{event.title}</p>
                  {event.description && (
                    <p className="text-muted-foreground">{event.description}</p>
                  )}
                  <p className="mt-1 capitalize">{event.type} • {event.priority} priority</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        {hasMoreEvents && (
          <button
            onClick={() => onEventClick(events[maxDisplayEvents])}
            className="w-full text-left text-xs px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            +{events.length - maxDisplayEvents} more
          </button>
        )}
      </div>
    </Card>
  );
}