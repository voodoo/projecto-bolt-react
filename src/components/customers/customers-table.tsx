import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Customer } from "@/lib/data/customers";
import { CustomerStatus } from "./customer-status";
import { Button } from "@/components/ui/button";
import { CustomerDialog } from "./customer-dialog";
import { Pencil } from "lucide-react";

interface CustomersTableProps {
  customers: Customer[];
  onCustomerUpdate: (customerId: string, customerData: Omit<Customer, 'id'>) => void;
}

export function CustomersTable({ customers, onCustomerUpdate }: CustomersTableProps) {
  const handleStatusToggle = (customer: Customer) => {
    onCustomerUpdate(customer.id, {
      ...customer,
      status: customer.status === "active" ? "inactive" : "active",
    });
  };

  // Sort customers by status (active first, then inactive)
  const sortedCustomers = [...customers].sort((a, b) => {
    if (a.status === b.status) {
      // If status is the same, sort by name
      return a.name.localeCompare(b.name);
    }
    // Active customers come first
    return a.status === "active" ? -1 : 1;
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead className="text-right">Total Spent</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCustomers.map((customer) => (
            <TableRow 
              key={customer.id}
              className={customer.status === "inactive" ? "bg-muted/50" : undefined}
            >
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>
                <CustomerStatus 
                  status={customer.status} 
                  onClick={() => handleStatusToggle(customer)}
                />
              </TableCell>
              <TableCell>{new Date(customer.lastOrder).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                ${customer.totalSpent.toFixed(2)}
              </TableCell>
              <TableCell>
                <CustomerDialog
                  customer={customer}
                  onSave={(data) => onCustomerUpdate(customer.id, data)}
                  trigger={
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}