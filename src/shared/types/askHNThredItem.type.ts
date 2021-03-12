export interface AskHNThredItem {
  id: number;
  createdAt: Date;
  type: string;
  author: string;
  title: null | string;
  text: string;
  points: number | null;
  parentId: number | null;
  storyId: number | null;
  children: AskHNThredItem[];
  options?: any[];
}
