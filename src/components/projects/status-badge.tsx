import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/lib/data/projects";
import { Clock, CheckCircle2, PauseCircle, Zap } from "lucide-react";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    in_progress: {
      icon: Zap,
      label: "In Progress",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      gradient: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50",
    },
    completed: {
      icon: CheckCircle2,
      label: "Completed",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      gradient: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
    },
    on_hold: {
      icon: PauseCircle,
      label: "On Hold",
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/50",
      borderColor: "border-amber-200 dark:border-amber-800",
      iconColor: "text-amber-600 dark:text-amber-400",
      gradient: "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border",
        "transition-all duration-300",
        "hover:shadow-md hover:scale-[1.02]",
        "cursor-default backdrop-blur-sm",
        config.gradient,
        config.borderColor,
        className
      )}
    >
      {status === 'in_progress' && (
        <span className="relative flex h-2 w-2">
          <span className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-60",
            "animate-[ping_3s_ease-in-out_infinite]",
            "bg-indigo-400"
          )} />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
        </span>
      )}
      {status !== 'in_progress' && (
        <span className={cn(
          "h-2 w-2 rounded-full",
          status === 'completed' && "bg-emerald-500",
          status === 'on_hold' && "bg-amber-500"
        )} />
      )}
      <div className="flex items-center gap-1.5">
        <Icon className={cn(
          "h-4 w-4 transition-transform",
          config.iconColor,
          status === 'in_progress' && "animate-[spin_4s_linear_infinite]"
        )} />
        <span className={cn(
          "text-sm font-medium tracking-wide",
          config.color
        )}>
          {config.label}
        </span>
      </div>
    </div>
  );
}