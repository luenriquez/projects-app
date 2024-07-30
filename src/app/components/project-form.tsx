"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Manager, mockManager } from "../mocks/manager-mock";
import { mockProject, Project } from "../mocks/project-mock";
import { Assigned, mockAssigned } from "../mocks/assigned-mock";
import { ProjectSchema, projectSchema } from "../validations/project-schema";

export interface ProjectFormProps {
  projectId?: string;
  onSubmit: (values: ProjectSchema) => void;
}

export default function ProjectForm({ projectId, onSubmit }: ProjectFormProps) {
  const [project, setProject] = useState<Project>();
  const [managers, setManagers] = useState<Manager[]>([]);
  const [assignments, setAssignments] = useState<Assigned[]>([]);
  useEffect(() => {
    setManagers([mockManager(), mockManager(), mockManager()]);
    setAssignments([mockAssigned(), mockAssigned(), mockAssigned()]);
    if (projectId)
      setProject(
        mockProject({
          id: projectId,
          manager: managers[0],
          assigned: assignments[0],
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: project?.name || "",
        description: project?.description || "",
        manager: project?.manager?.id || "",
        assigned: project?.assigned?.id || "",
        status: project?.status || "",
      }}
      validationSchema={projectSchema}
      onSubmit={(values: ProjectSchema) => {
        onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="p-3 my-4 border-b-2 border-gray lg:w-1/2 lg:border lg:border-gray lg:rounded-md">
          <label>Project name</label>
          <Field
            className={`w-full rounded-md border-gray border py-2 mb-4 ${
              errors.name && touched.name ? "border-red-500 mb-1" : ""
            }`}
            type="text"
            name="name"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 mb-4"
          />

          <label>Description</label>
          <Field
            className={`w-full rounded-md border-gray border py-2 mb-4 ${
              errors.description && touched.description
                ? "border-red-500 mb-1"
                : ""
            }`}
            type="text"
            name="description"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500 mb-4"
          />

          <label>Project manager</label>
          <Field
            as="select"
            name="manager"
            className={`w-full rounded-md border-gray border py-2 mb-4 ${
              errors.manager && touched.manager ? "border-red-500 mb-1" : ""
            }`}
          >
            <option value="" disabled>
              Select a person
            </option>
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                {manager.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="manager"
            component="div"
            className="text-red-500 mb-4"
          />

          <label>Assigned to</label>
          <Field
            as="select"
            name="assigned"
            className={`w-full rounded-md border-gray border py-2 mb-4 ${
              errors.assigned && touched.assigned ? "border-red-500 mb-1" : ""
            }`}
          >
            <option value="" disabled>
              Select a person
            </option>
            {assignments.map((assignment) => (
              <option key={assignment.id} value={assignment.id}>
                {assignment.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="assigned"
            component="div"
            className="text-red-500 mb-4"
          />

          <label>Status</label>
          <Field
            as="select"
            name="status"
            className={`w-full rounded-md border-gray border py-2 mb-4 ${
              errors.status && touched.status ? "border-red-500 mb-1" : ""
            }`}
          >
            <option value="" disabled>
              Select a status
            </option>
            <option key={1} value="enabled">
              Enabled
            </option>
            <option key={2} value="disabled">
              Disabled
            </option>
          </Field>
          <ErrorMessage
            name="status"
            component="div"
            className="text-red-500 mb-4"
          />

          <button
            className="bg-primary text-white rounded-md p-2 mb-4"
            type="submit"
          >
            {project ? "Save changes" : "Create project"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
