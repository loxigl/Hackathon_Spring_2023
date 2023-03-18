export interface QuizModel {
  _id: string;
  categories?: string[];
  tags?: string[];
  title: string;
  // link: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  Preview: string;
}
