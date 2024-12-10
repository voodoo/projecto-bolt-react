export type ProjectStatus = 'in_progress' | 'completed' | 'on_hold';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  team: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design principles',
    status: 'in_progress',
    progress: 65,
    dueDate: '2024-03-15',
    team: [
      { id: '1', name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
      { id: '2', name: 'Michael Park', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36' },
    ],
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    status: 'in_progress',
    progress: 35,
    dueDate: '2024-04-20',
    team: [
      { id: '3', name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: '4', name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
    ],
  },
  {
    id: '3',
    name: 'E-commerce Integration',
    description: 'Integration of payment gateway and inventory management system',
    status: 'completed',
    progress: 100,
    dueDate: '2024-01-30',
    team: [
      { id: '5', name: 'James Lee', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    ],
  },
  {
    id: '4',
    name: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard for business metrics',
    status: 'on_hold',
    progress: 45,
    dueDate: '2024-05-01',
    team: [
      { id: '6', name: 'Lisa Johnson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
      { id: '7', name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
    ],
  },
];