export interface Course {
  id: number;
  name: string;
  description: string;
  teacher: string;
  students: string[];
  startDate: Date;
  endDate: Date;
}
