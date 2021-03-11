// import axios from "axios";
import { httpService, TimeService } from "src/shared/services";
import { ThunkResult } from "src/store/types";
import { AskHNThredResponseDto } from "./dto/askHNThredResponse.dto";
import {
  FetchAskHNThreadActions,
  FetchAskHNThreadActionType,
} from "./fetchAskHNThread.types";
import { askHNThredResponseDtoToAskHNThredMapper } from "./mappers/askHNThredResponseDtoToAskHNThred.mapper";

interface FetchAshHNThreadArgs {
  date: Date;
}

export const fetchAskHNThread = ({
  date,
}: FetchAshHNThreadArgs): ThunkResult<FetchAskHNThreadActions> => async (
  dispatch
) => {
  dispatch({
    type: FetchAskHNThreadActionType.Pending,
  });

  try {
    const monthAndYearFormat = TimeService.getStringMonthAndYear(date);
    const queryText = `Ask HN: Who is hiring? (Ask HN: Who is hiring? (${monthAndYearFormat}))`;
    const encodeQuery = encodeURIComponent(queryText);

    const { data } = await httpService<AskHNThredResponseDto>({
      endpoint: `search?query=${encodeQuery}`,
      method: "GET",
    });

    const askHNThred = askHNThredResponseDtoToAskHNThredMapper(data);

    dispatch({
      type: FetchAskHNThreadActionType.Fulfilled,
      payload: askHNThred,
    });
  } catch (error) {
    dispatch({
      type: FetchAskHNThreadActionType.Rejected,
    });
  }
};
