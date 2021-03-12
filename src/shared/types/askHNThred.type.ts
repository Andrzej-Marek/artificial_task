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
  // highlightResult: AskHNThredHighlightResultDto;
}

// TODO: Remove if unnecessary
// export interface AskHNThredHighlightResultDto {
//   title: AskHNThredAuthorDto;
//   author: AskHNThredAuthorDto;
//   storyText: AskHNThredAuthorDto;
// }

// export interface AskHNThredAuthorDto {
//   value: string;
//   matchLevel: string;
//   matchedWords: string[];
//   fullyHighlighted?: boolean;
// }
