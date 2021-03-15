import { Action } from "redux";
import { AskHNThredItem } from "src/shared/types";

export enum SetFilteredJobsOffertsActionType {
  Fulfilled = "SET_FILTERED_JOBS_OFFERTS_FULLFILED",
}

interface SetFilteredJobsOffertsFulfilled extends Action {
  type: SetFilteredJobsOffertsActionType.Fulfilled;
  payload: AskHNThredItem[];
}

export type SetFilteredJobsOffertsActions = SetFilteredJobsOffertsFulfilled;
