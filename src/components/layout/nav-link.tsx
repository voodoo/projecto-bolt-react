import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface NavLinkProps {
  icon: LucideIcon;
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function NavLink({ icon: Icon, children, href, className }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
        "w-full justify-start gap-2",
        className
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}