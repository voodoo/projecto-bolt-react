import { addDays, startOfDay } from "date-fns";

export interface Event {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  type: 'meeting' | 'task' | 'reminder';
  priority: 'low' | 'medium' | 'high';
}

const today = startOfDay(new Date());

export const events: Event[] = [
  {
    id: '1',
    title: 'Team Standup',
    description: 'Daily team sync meeting',
    start: addDays(today, 0),
    end: addDays(today, 0),
    type: 'meeting',
    priority: 'medium',
  },
  {
    id: '2',
    title: 'Project Review',
    description: 'Review project milestones and progress',
    start: addDays(today, 1),
    end: addDays(today, 1),
    type: 'meeting',
    priority: 'high',
  },
  {
    id: '3',
    title: 'Client Presentation',
    description: 'Present new features to the client',
    start: addDays(today, 2),
    end: addDays(today, 2),
    type: 'meeting',
    priority: 'high',
  },
  {
    id: '4',
    title: 'Documentation Update',
    description: 'Update project documentation',
    start: addDays(today, 3),
    end: addDays(today, 3),
    type: 'task',
    priority: 'low',
  },
];