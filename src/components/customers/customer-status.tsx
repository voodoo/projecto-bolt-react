import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Customer } from "@/lib/data/customers";
import { CheckCircle2, XCircle } from "lucide-react";

interface CustomerStatusProps {
  status: Customer["status"];
  onClick?: () => void;
  className?: string;
}

export function CustomerStatus({ status, onClick, className }: CustomerStatusProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        "h-auto px-2 py-1 gap-1.5",
        status === "active" && "text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400",
        status === "inactive" && "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
        className
      )}
    >
      {status === "active" ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <XCircle className="h-4 w-4" />
      )}
      <span className="capitalize">{status}</span>
    </Button>
  );
}