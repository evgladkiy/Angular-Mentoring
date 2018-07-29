import Trainer from './trainer.model';

export interface Course {
  _id: string;
  title: string;
  trainers: Trainer[];
  date: Date;
  duration: number;
  description: string;
  img: string;
  rating: number;
  language: string;
  difficulty: string;
  type: string;
  isFavorite: boolean;
  owner: string;
}
