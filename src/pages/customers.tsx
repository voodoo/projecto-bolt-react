import { useState } from "react";
import { CustomersHeader } from "@/components/customers/customers-header";
import { CustomersTable } from "@/components/customers/customers-table";
import { Customer, customers as initialCustomers } from "@/lib/data/customers";
import { useToast } from "@/hooks/use-toast";

export function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCustomerCreate = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      ...customerData,
      id: crypto.randomUUID(),
    };
    setCustomers((prev) => [...prev, newCustomer]);
    toast({
      title: "Customer Added",
      description: "New customer has been successfully added.",
    });
  };

  const handleCustomerUpdate = (customerId: string, customerData: Omit<Customer, 'id'>) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === customerId
          ? { ...customer, ...customerData }
          : customer
      )
    );
    toast({
      title: "Customer Updated",
      description: "Customer information has been successfully updated.",
    });
  };

  return (
    <div className="space-y-6">
      <CustomersHeader 
        onSearch={setSearchQuery} 
        onCustomerCreate={handleCustomerCreate}
      />
      <CustomersTable 
        customers={filteredCustomers}
        onCustomerUpdate={handleCustomerUpdate}
      />
    </div>
  );
}