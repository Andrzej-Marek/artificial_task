import { AskHNThredItem } from "src/shared/types";
import { AskHNThredItemResponseDto } from "../dto";

export const askHNThredItemResponseDtoToAskHNThread = (
  askHNThredItemResponseDto: AskHNThredItemResponseDto
): AskHNThredItem => ({
  id: askHNThredItemResponseDto.id,
  author: askHNThredItemResponseDto.author,
  createdAt: askHNThredItemResponseDto.createdAt,
  parentId: askHNThredItemResponseDto.parentId,
  points: askHNThredItemResponseDto.points,
  storyId: askHNThredItemResponseDto.storyId,
  text: askHNThredItemResponseDto.text,
  title: askHNThredItemResponseDto.title,
  type: askHNThredItemResponseDto.type,
  children: askHNThredItemResponseDto.children.map((el) =>
    askHNThredItemResponseDtoToAskHNThread(el)
  ),
  options: askHNThredItemResponseDto.options,
});
