import { Action } from "redux";
import { AskHNThredItem } from "src/shared/types";

export enum FetchAskHNThreadItemsActionType {
  Pending = "FETCH_ASK_HN_THREAD_ITEMS_PENDING",
  Fulfilled = "FETCH_ASK_HN_THREAD_ITEMS_FULLFILED",
  Rejected = "FETCH_ASK_HN_THREAD_ITEMS_REJECTED",
}

interface FetchAskHNThreadItemsPending extends Action {
  type: FetchAskHNThreadItemsActionType.Pending;
}

interface FetchAskHNThreadItemsFulfilled extends Action {
  type: FetchAskHNThreadItemsActionType.Fulfilled;
  payload: AskHNThredItem; // TODO: FIX NAMES
}
interface FetchAskHNThreadItemsRejected extends Action {
  type: FetchAskHNThreadItemsActionType.Rejected;
}

export type FetchAskHNThreadItemsActions =
  | FetchAskHNThreadItemsRejected
  | FetchAskHNThreadItemsFulfilled
  | FetchAskHNThreadItemsPending;
