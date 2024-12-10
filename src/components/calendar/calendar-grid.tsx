import { CalendarDay } from "./calendar-day";
import { Event } from "@/lib/data/events";
import { addDays, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from "date-fns";
import { Card } from "@/components/ui/card";

interface CalendarGridProps {
  date: Date;
  events: Event[];
  onEventClick: (event: Event) => void;
}

export function CalendarGrid({ date, events, onEventClick }: CalendarGridProps) {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));
  const days = eachDayOfInterval({ start, end });

  return (
    <Card className="p-4">
      <div className="grid grid-cols-7 gap-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-sm font-medium text-center py-2 text-muted-foreground">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const dayEvents = events.filter((event) => isSameDay(day, event.start));
          return (
            <CalendarDay
              key={format(day, 'yyyy-MM-dd')}
              date={day}
              events={dayEvents}
              isToday={isSameDay(day, new Date())}
              isCurrentMonth={isSameMonth(day, date)}
              onEventClick={onEventClick}
            />
          );
        })}
      </div>
    </Card>
  );
}