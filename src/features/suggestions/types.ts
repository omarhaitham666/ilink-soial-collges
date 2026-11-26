export type SuggestionCategory =
  | "Feature"
  | "Improvement"
  | "Bug"
  | "UI/UX"
  | "Other";

export interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: SuggestionCategory;
  votes: number;

  author: {
    id: number;
    name: string;
    avatar: string;
  };

  createdAt: string;
}