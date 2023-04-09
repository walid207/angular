export interface Apprenant {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    courses: string[]; // liste des identifiants des cours suivis
    parentEmail: string; // email du parent ou tuteur légal
  }
  