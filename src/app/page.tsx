"use client";

import Header from "./components/header";
import Button from "./components/button";
import { mockProject, Project } from "./mocks/project-mock";
import ProjectItem from "./components/project-item";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectsTable from "./components/projects-table";
import ConfirmationModal from "./components/confirmation-modal";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setProjects([mockProject(), mockProject(), mockProject()]);
  }, []);

  return (
    <main>
      <Header
        title="My projects"
        actions={
          <Button
            content={
              <Link href={"/projects/add"} className="flex items-center">
                <p className="text-2xl  px-1">+</p>
                <p className="text-sm">Add project</p>
              </Link>
            }
          />
        }
      />
      {showModal && (
        <ConfirmationModal
          title="Are you sure?"
          onCancel={() => setShowModal(!showModal)}
          onSubmit={() => setShowModal(!showModal)}
          show={showModal}
        />
      )}
      <div className="my-8 block md:hidden">
        {projects.map((project: Project) => {
          return (
            <ProjectItem
              project={project}
              key={project.id}
              onShowModal={() => setShowModal(!showModal)}
            />
          );
        })}
      </div>
      <div className="hidden md:block px-10 my-10">
        <ProjectsTable
          projects={projects}
          onShowModal={() => setShowModal(!showModal)}
        />
      </div>
    </main>
  );
}
