export interface AskHNThredItemResponseDto {
  id: number;
  createdAt: Date;
  createdAtI: number;
  type: string;
  author: string;
  title: null | string;
  url: null;
  text: string;
  points: number | null;
  parentId: number | null;
  storyId: number | null;
  children: AskHNThredItemResponseDto[];
  options?: any[];
}
