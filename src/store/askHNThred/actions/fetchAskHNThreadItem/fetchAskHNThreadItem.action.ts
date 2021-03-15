import { ApiEndpoint } from "src/shared/enums";
import { httpService } from "src/shared/services";
import { ThunkResult } from "src/store/types";
import { AskHNThredItemResponseDto } from "./dto";
import {
  FetchAskHNThreadItemActions,
  FetchAskHNThreadItemActionType,
} from "./fetchAskHNThreadItem.types";

import { askHNThredItemResponseDtoToAskHNThread } from "./mappers";

interface FetchAskHNThreadItemsArgs {
  objectId: string;
}

export const fetchAskHNThreadItem = ({
  objectId,
}: FetchAskHNThreadItemsArgs): ThunkResult<FetchAskHNThreadItemActions> => async (
  dispatch
) => {
  dispatch({
    type: FetchAskHNThreadItemActionType.Pending,
  });
  try {
    const { data } = await httpService<AskHNThredItemResponseDto>({
      endpoint: `${ApiEndpoint.HNItems}/${objectId}`,
      method: "GET",
    });

    const askHNThredItem = askHNThredItemResponseDtoToAskHNThread(data);

    dispatch({
      type: FetchAskHNThreadItemActionType.Fulfilled,
      payload: askHNThredItem, // TODO: Fix names
    });
  } catch (error) {
    dispatch({
      type: FetchAskHNThreadItemActionType.Rejected,
    });
  }
};
