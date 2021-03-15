export interface AskHNThred {
  hits: AskHNThredHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMs: number;
}

export interface AskHNThredHit {
  createdAt: Date;
  title: string | null;
  url: null | string;
  author: string;
  points: number;
  storyText: string;
  commentText: null | string;
  numComments: number;
  storyId: null | number;
  storyTitle: null | string;
  storyUrl: null | string;
  parentId: null | number;
  createdAtI: number;
  tags: string[];
  objectId: string;
}
