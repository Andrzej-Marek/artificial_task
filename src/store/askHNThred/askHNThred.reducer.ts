import { Reducer } from "redux";
import {
  FetchAskHNThreadActions,
  FetchAskHNThreadActionType,
  FetchAskHNThreadItemActions,
  FetchAskHNThreadItemActionType,
  SetFetchDateActions,
  SetFetchDateActionType,
  SetFilteredJobsOffertsActions,
  SetFilteredJobsOffertsActionType,
} from "./actions";
import { AskHNThredStore } from "./types";

const initialState: AskHNThredStore = {
  isPending: false,
  fetchDate: new Date(),
  threads: [],
  filteredJobsOfferts: [],
  threadItem: null,
};

export type AskHnThredActions =
  | FetchAskHNThreadActions
  | SetFetchDateActions
  | FetchAskHNThreadItemActions
  | SetFilteredJobsOffertsActions;

export const askHnThredReducer: Reducer<AskHNThredStore, AskHnThredActions> = (
  state = initialState,
  action
): AskHNThredStore => {
  switch (action.type) {
    case FetchAskHNThreadActionType.Pending:
      return {
        ...state,
        isPending: true,
      };
    case FetchAskHNThreadActionType.Fulfilled:
      return {
        ...state,
        isPending: false,
        threads: [action.payload],
      };
    case FetchAskHNThreadActionType.Rejected:
      return {
        ...state,
        isPending: false,
      };
    case SetFetchDateActionType.Pending:
      return {
        ...state,
        isPending: true,
      };
    case SetFetchDateActionType.Fulfilled:
      return {
        ...state,
        isPending: false,
        fetchDate: action.payload,
      };
    case FetchAskHNThreadItemActionType.Pending:
      return {
        ...state,
        isPending: true,
        threadItem: null,
      };
    case FetchAskHNThreadItemActionType.Fulfilled:
      return {
        ...state,
        isPending: false,
        threadItem: action.payload,
        filteredJobsOfferts: action.payload.children,
      };
    case FetchAskHNThreadItemActionType.Rejected:
      return {
        ...state,
        isPending: false,
      };
    case SetFilteredJobsOffertsActionType.Fulfilled:
      return {
        ...state,
        filteredJobsOfferts: action.payload,
      };
    default:
      return state;
  }
};
