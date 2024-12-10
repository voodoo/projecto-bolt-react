import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project, ProjectStatus } from "@/lib/data/projects";
import { StatusBadge } from "./status-badge";

interface StatusUpdateDialogProps {
  project: Project;
  onStatusUpdate: (projectId: string, newStatus: ProjectStatus) => void;
}

export function StatusUpdateDialog({ project, onStatusUpdate }: StatusUpdateDialogProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<ProjectStatus>(project.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStatusUpdate(project.id, status);
    setOpen(false);
  };

  const dialogTitle = "Update Project Status";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <StatusBadge status={project.status} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            Change the status of "{project.name}"
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Select value={status} onValueChange={(value: ProjectStatus) => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on_hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Update Status</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}