export interface AskHNThredResponseDto {
  hits: AskHNThredResponseHitDto[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMs: number;
}

export interface AskHNThredResponseHitDto {
  createdAt: Date;
  title: string;
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
  highlightResult: AskHNThredResponseHighlightResultDto;
}

export interface AskHNThredResponseHighlightResultDto {
  title: AskHNThredResponseAuthorDto;
  author: AskHNThredResponseAuthorDto;
  storyText: AskHNThredResponseAuthorDto;
}

export interface AskHNThredResponseAuthorDto {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}
