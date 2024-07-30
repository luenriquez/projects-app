"use client";
import Header from "@/app/components/header";
import ProjectForm from "@/app/components/project-form";
import { mockProject, Project } from "@/app/mocks/project-mock";
import { useEffect, useState } from "react";

export default function Edit() {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    setProject(mockProject());
  }, []);

  return (
    <div>
      <Header title="Edit project" showGoBack />
      <div className="lg:flex lg:justify-center">
        <ProjectForm
          onSubmit={() => console.log("Acá iría el guardado del project")}
          projectId={project?.id}
        />
      </div>
    </div>
  );
}
