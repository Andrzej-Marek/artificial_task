import { AskHNThred, AskHNThredHit } from "src/shared/types";
import { AskHNThredResponseDto, AskHNThredResponseHitDto } from "../dto";

const askHNThredResponseHitDtoToAskHNThredHitMapper = (
  askHNThredResponseHitDto: AskHNThredResponseHitDto
): AskHNThredHit => ({
  url: askHNThredResponseHitDto.url,
  author: askHNThredResponseHitDto.author,
  commentText: askHNThredResponseHitDto.commentText,
  createdAt: askHNThredResponseHitDto.createdAt,
  createdAtI: askHNThredResponseHitDto.createdAtI,
  numComments: askHNThredResponseHitDto.numComments,
  objectId: askHNThredResponseHitDto.objectId,
  parentId: askHNThredResponseHitDto.parentId,
  points: askHNThredResponseHitDto.points,
  storyId: askHNThredResponseHitDto.storyId,
  storyText: askHNThredResponseHitDto.storyText,
  storyTitle: askHNThredResponseHitDto.storyTitle,
  storyUrl: askHNThredResponseHitDto.storyUrl,
  tags: askHNThredResponseHitDto.tags,
  title: askHNThredResponseHitDto.title,
});

export const askHNThredResponseDtoToAskHNThredMapper = (
  askHNThredResponseDto: AskHNThredResponseDto
): AskHNThred => ({
  query: askHNThredResponseDto.query,
  exhaustiveNbHits: askHNThredResponseDto.exhaustiveNbHits,
  hitsPerPage: askHNThredResponseDto.hitsPerPage,
  nbHits: askHNThredResponseDto.nbHits,
  nbPages: askHNThredResponseDto.nbPages,
  page: askHNThredResponseDto.page,
  params: askHNThredResponseDto.params,
  processingTimeMs: askHNThredResponseDto.processingTimeMs,
  hits: askHNThredResponseDto.hits.map((hit) =>
    askHNThredResponseHitDtoToAskHNThredHitMapper(hit)
  ),
});
