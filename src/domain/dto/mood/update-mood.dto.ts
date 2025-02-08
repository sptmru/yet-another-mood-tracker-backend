export type UpdateMoodDTO = {
  id: string;
  date?: string;
  rating?: number;
  description?: string;
  reasonIds?: string[];
};
