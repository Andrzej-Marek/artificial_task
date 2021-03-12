import { Reducer } from "redux";
import {
  FetchAskHNThreadActions,
  FetchAskHNThreadActionType,
  FetchAskHNThreadItemsActions,
  FetchAskHNThreadItemsActionType,
  SetFetchDateActions,
  SetFetchDateActionType,
} from "./actions";
import { AskHNThredStore } from "./types";

const initialState: AskHNThredStore = {
  isPending: false,
  fetchDate: new Date(),
  threads: [],
  threadItem: null,
};

export type AskHnThredActions =
  | FetchAskHNThreadActions
  | SetFetchDateActions
  | FetchAskHNThreadItemsActions;

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
    case FetchAskHNThreadItemsActionType.Pending:
      return {
        ...state,
        isPending: true,
        threadItem: null,
      };
    case FetchAskHNThreadItemsActionType.Fulfilled:
      return {
        ...state,
        isPending: false,
        threadItem: action.payload,
      };
    case FetchAskHNThreadItemsActionType.Rejected:
      return {
        ...state,
        isPending: false,
      };
    default:
      return state;
  }
};
