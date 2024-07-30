import Image from "next/image";
import { Project } from "../mocks/project-mock";
import moment from "moment";
import { useState } from "react";
import MenuOptions from "./menu-options";

export interface ProjectItemProps {
  project: Project;
  onShowModal: () => void;
}

export default function ProjectItem({ project, onShowModal }: ProjectItemProps) {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="px-3 my-2 border-b  border-b-gray">
      <div className="w-full flex justify-between">
        <div>
          <h1>{project.name}</h1>
          <h5 className="text-xs text-gray">
            Creation date:{" "}
            {moment(project.createdAt).format("MM/DD/YYYY hh:mm a")}
          </h5>
        </div>
        <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            width={30}
            height={10}
            src="/assets/menu-icon.svg"
            alt="menu"
          />
        </div>
        {menuOpen && (<MenuOptions  device="md" projectId={project.id} onDelete={onShowModal}/>)}
      </div>
      <div className="flex my-2 items-center">
        <Image
          className="mr-2 rounded-full"
          width={35}
          height={35}
          src={project.assigned.avatar}
          alt="avatar"
        />
        <h3 className="text-sm">{project.assigned.name}</h3>
      </div>
    </div>
  );
}
