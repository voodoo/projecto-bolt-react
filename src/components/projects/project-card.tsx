import { AvatarGroup } from "@/components/projects/project-team";
import { StatusUpdateDialog } from "@/components/projects/status-update-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Project, ProjectStatus } from "@/lib/data/projects";
import { CalendarDays } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onStatusUpdate: (projectId: string, newStatus: ProjectStatus) => void;
}

export function ProjectCard({ project, onStatusUpdate }: ProjectCardProps) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{project.name}</CardTitle>
          <StatusUpdateDialog project={project} onStatusUpdate={onStatusUpdate} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress 
            value={project.progress} 
            className={project.status === 'on_hold' ? 'opacity-60' : ''}
          />
        </div>
        <div className="flex items-center justify-between">
          <AvatarGroup users={project.team} />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}