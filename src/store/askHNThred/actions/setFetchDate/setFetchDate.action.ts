import { ThunkResult } from "src/store/types";
import {
  SetFetchDateActions,
  SetFetchDateActionType,
} from "./setFetchDate.types";

interface SetFetchDateArgs {
  selectedDate: Date;
}

export const setFetchDate = ({
  selectedDate,
}: SetFetchDateArgs): ThunkResult<SetFetchDateActions> => async (dispatch) => {
  dispatch({
    type: SetFetchDateActionType.Pending,
  });

  dispatch({
    type: SetFetchDateActionType.Fulfilled,
    payload: selectedDate,
  });
};
