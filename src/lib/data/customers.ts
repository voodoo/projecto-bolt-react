export interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  lastOrder: string;
  totalSpent: number;
}

export const customers: Customer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    status: 'active',
    lastOrder: '2024-01-15',
    totalSpent: 1250.00,
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    status: 'active',
    lastOrder: '2024-01-10',
    totalSpent: 850.50,
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@example.com',
    status: 'inactive',
    lastOrder: '2023-12-25',
    totalSpent: 2100.75,
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    status: 'active',
    lastOrder: '2024-01-18',
    totalSpent: 3300.25,
  },
  {
    id: '5',
    name: 'Eva Davis',
    email: 'eva@example.com',
    status: 'active',
    lastOrder: '2024-01-05',
    totalSpent: 750.00,
  },
];