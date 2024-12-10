import { useState } from "react";
import { CalendarHeader } from "@/components/calendar/calendar-header";
import { CalendarGrid } from "@/components/calendar/calendar-grid";
import { EventDetailsDialog } from "@/components/calendar/event-details-dialog";
import { Event, events as initialEvents } from "@/lib/data/events";
import { addMonths, subMonths } from "date-fns";

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handlePrevMonth = () => {
    setCurrentDate((date) => subMonths(date, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((date) => addMonths(date, 1));
  };

  const handleEventCreate = (newEvent: Omit<Event, 'id'>) => {
    const event: Event = {
      ...newEvent,
      id: crypto.randomUUID(),
    };
    setEvents((prev) => [...prev, event]);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <CalendarHeader
        date={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onEventCreate={handleEventCreate}
      />
      <CalendarGrid 
        date={currentDate} 
        events={events} 
        onEventClick={handleEventClick}
      />
      <EventDetailsDialog
        event={selectedEvent}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </div>
  );
}