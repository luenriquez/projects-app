import moment from "moment";
import { Project } from "../mocks/project-mock";
import Image from "next/image";
import MenuOptions from "./menu-options";
import { useState } from "react";

export default function ProjectsTable({ projects, onShowModal }: { projects: Project[], onShowModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <table className="min-w-full divide-y divide-gray shadow-2xl">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-4 text-left font-medium text-gray-500 tracking-wider">
            Project info
          </th>
          <th className="px-6 py-4 text-left font-medium text-gray-500 tracking-wider">
            Project manager
          </th>
          <th className="px-6 py-4 text-left font-medium text-gray-500 tracking-wider">
            Assigned to
          </th>
          <th className="px-6 py-4 text-left font-medium text-gray-500 tracking-wider">
            Status
          </th>
          <th className="px-6 py-4 text-left font-medium text-gray-500 tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray">
        {projects.map((project) => (
          <tr key={project.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <h1 className="text-lg font-semibold">{project.name}</h1>
              <h5 className="text-xs text-gray-500">
                Creation date: {moment(project.createdAt).format("MM/DD/YYYY hh:mm a")}
              </h5>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <Image
                  className="mr-2 rounded-full"
                  width={35}
                  height={35}
                  src={project.manager.avatar}
                  alt="Manager avatar"
                />
                <h3 className="text-sm">{project.manager.name}</h3>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <Image
                  className="mr-2 rounded-full"
                  width={35}
                  height={35}
                  src={project.assigned.avatar}
                  alt="Assigned avatar"
                />
                <h3 className="text-sm">{project.assigned.name}</h3>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="border p-1 border-gray rounded-md">{project.status}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Image
                width={30}
                height={10}
                src="/assets/menu-icon.svg"
                alt="menu"
                onClick={() => {
                  setSelected(project.id)
                  setMenuOpen(!menuOpen)
                }}
                className="cursor-pointer"
              />
              {menuOpen && (selected === project.id) && (<MenuOptions device='lg' projectId={project.id} onDelete={onShowModal}/>)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
