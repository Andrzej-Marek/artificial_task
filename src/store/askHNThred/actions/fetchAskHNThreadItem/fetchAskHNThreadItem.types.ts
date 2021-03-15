import { Action } from "redux";
import { AskHNThredItem } from "src/shared/types";

export enum FetchAskHNThreadItemActionType {
  Pending = "FETCH_ASK_HN_THREAD_ITEM_PENDING",
  Fulfilled = "FETCH_ASK_HN_THREAD_ITEM_FULLFILED",
  Rejected = "FETCH_ASK_HN_THREAD_ITEM_REJECTED",
}

interface FetchAskHNThreadItemPending extends Action {
  type: FetchAskHNThreadItemActionType.Pending;
}

interface FetchAskHNThreadItemFulfilled extends Action {
  type: FetchAskHNThreadItemActionType.Fulfilled;
  payload: AskHNThredItem;
}
interface FetchAskHNThreadItemRejected extends Action {
  type: FetchAskHNThreadItemActionType.Rejected;
}

export type FetchAskHNThreadItemActions =
  | FetchAskHNThreadItemRejected
  | FetchAskHNThreadItemFulfilled
  | FetchAskHNThreadItemPending;
