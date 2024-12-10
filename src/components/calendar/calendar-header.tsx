import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { EventDialog } from "./event-dialog";
import { Event } from "@/lib/data/events";
import { Card } from "@/components/ui/card";

interface CalendarHeaderProps {
  date: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onEventCreate: (event: Omit<Event, 'id'>) => void;
}

export function CalendarHeader({ date, onPrevMonth, onNextMonth, onEventCreate }: CalendarHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{format(date, 'MMMM yyyy')}</span>
        </div>
      </div>
      <Card className="flex items-center gap-2 p-2">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" onClick={onPrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={onNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="h-6 w-px bg-border mx-2" />
        <EventDialog onEventCreate={onEventCreate} />
      </Card>
    </div>
  );
}