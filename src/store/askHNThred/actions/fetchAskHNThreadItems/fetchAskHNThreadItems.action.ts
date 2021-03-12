import { ApiEndpoint } from "src/shared/enums";
import { httpService } from "src/shared/services";
import { ThunkResult } from "src/store/types";
import { AskHNThredItemResponseDto } from "./dto";
import {
  FetchAskHNThreadItemsActions,
  FetchAskHNThreadItemsActionType,
} from "./fetchAskHNThreadItems.types";
import { askHNThredItemResponseDtoToAskHNThread } from "./mappers";

interface FetchAskHNThreadItemsArgs {
  objectId: string;
}

export const fetchAskHNThreadItems = ({
  objectId,
}: FetchAskHNThreadItemsArgs): ThunkResult<FetchAskHNThreadItemsActions> => async (
  dispatch
) => {
  dispatch({
    type: FetchAskHNThreadItemsActionType.Pending,
  });
  try {
    const { data } = await httpService<AskHNThredItemResponseDto>({
      endpoint: `${ApiEndpoint.HNItems}/${objectId}`,
      method: "GET",
    });

    const askHNThredItem = askHNThredItemResponseDtoToAskHNThread(data);

    dispatch({
      type: FetchAskHNThreadItemsActionType.Fulfilled,
      payload: askHNThredItem, // TODO: Fix names
    });
  } catch (error) {
    dispatch({
      type: FetchAskHNThreadItemsActionType.Rejected,
    });
  }
};
