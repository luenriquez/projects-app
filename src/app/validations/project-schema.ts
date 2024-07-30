import * as Yup from 'yup';

export interface ProjectSchema {
  name: string;
  description: string;
  manager: string;
  assigned: string;
  status: string;
}

export const projectSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name should have a minimum length of 5")
    .max(30, "Name should have a maximum length of 30")
    .required("Name is required")
    .typeError("Name should be a type of text"),
    
  description: Yup.string()
    .min(10, "Description should have a minimum length of 10")
    .required("Description is required")
    .typeError("Description should be a type of text"),
    
  manager: Yup.string()
    .required("Manager is required")
    .typeError("Manager should be a type of text"),
    
  assigned: Yup.string()
    .required("Assigned is required")
    .typeError("Assigned should be a type of text"),
    
  status: Yup.string()
    .required("Status is required")
    .typeError("Status should be a type of text"),
});
