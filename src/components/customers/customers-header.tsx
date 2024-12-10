import { Input } from "@/components/ui/input";
import { CustomerDialog } from "./customer-dialog";
import { Customer } from "@/lib/data/customers";

interface CustomersHeaderProps {
  onSearch: (value: string) => void;
  onCustomerCreate: (customer: Omit<Customer, 'id'>) => void;
}

export function CustomersHeader({ onSearch, onCustomerCreate }: CustomersHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <p className="text-muted-foreground">
          Manage and view customer information
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search customers..."
          className="max-w-[300px]"
          onChange={(e) => onSearch(e.target.value)}
        />
        <CustomerDialog onSave={onCustomerCreate} />
      </div>
    </div>
  );
}