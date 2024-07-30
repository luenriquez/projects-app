"use client"
import Header from "../../components/header";
import ProjectForm from "../../components/project-form";

export default function Add() {
  return (
    <div>
      <Header title="Add project" showGoBack />
      <div className="lg:flex lg:justify-center">
      <ProjectForm onSubmit={() => console.log("Acá iría el guardado del project")} />
      </div>
    </div>
  );
}
