import { Action } from "redux";
import { AskHNThred } from "src/shared/types";

export enum FetchAskHNThreadActionType {
  Pending = "FETCH_ASK_HN_THREAD_PENDING",
  Fulfilled = "FETCH_ASK_HN_THREAD_FULLFILED",
  Rejected = "FETCH_ASK_HN_THREAD_REJECTED",
}

interface FetchAskHNThreadPending extends Action {
  type: FetchAskHNThreadActionType.Pending;
}

interface FetchAskHNThreadFulfilled extends Action {
  type: FetchAskHNThreadActionType.Fulfilled;
  payload: AskHNThred;
}
interface FetchAskHNThreadRejected extends Action {
  type: FetchAskHNThreadActionType.Rejected;
}

export type FetchAskHNThreadActions =
  | FetchAskHNThreadRejected
  | FetchAskHNThreadFulfilled
  | FetchAskHNThreadPending;
