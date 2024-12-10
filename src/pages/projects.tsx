import { useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectsHeader } from "@/components/projects/projects-header";
import { Project, ProjectStatus, projects as initialProjects } from "@/lib/data/projects";
import { useToast } from "@/hooks/use-toast";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
  const { toast } = useToast();

  const filteredProjects = projects.filter((project) =>
    statusFilter === 'all' ? true : project.status === statusFilter
  );

  const handleStatusUpdate = (projectId: string, newStatus: ProjectStatus) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, status: newStatus }
          : project
      )
    );

    toast({
      title: "Status Updated",
      description: "The project status has been successfully updated.",
    });
  };

  return (
    <div className="space-y-6">
      <ProjectsHeader onFilterChange={setStatusFilter} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onStatusUpdate={handleStatusUpdate}
          />
        ))}
      </div>
    </div>
  );
}