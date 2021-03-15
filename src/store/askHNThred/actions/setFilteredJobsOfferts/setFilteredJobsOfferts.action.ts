import { AskHNThredItem } from "src/shared/types";
import { ThunkResult } from "src/store/types";
import {
  SetFilteredJobsOffertsActions,
  SetFilteredJobsOffertsActionType,
} from "./setFilteredJobsOfferts.types";

interface SetFilteredJobsOffertsArgs {
  jobsOfferts: AskHNThredItem[];
}

export const setFilteredJobsOfferts = ({
  jobsOfferts,
}: SetFilteredJobsOffertsArgs): ThunkResult<SetFilteredJobsOffertsActions> => async (
  dispatch
) => {
  dispatch({
    type: SetFilteredJobsOffertsActionType.Fulfilled,
    payload: jobsOfferts,
  });
};
