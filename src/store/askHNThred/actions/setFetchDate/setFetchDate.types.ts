import { Action } from "redux";

export enum SetFetchDateActionType {
  Pending = "SET_FETCH_DATE_PENDING",
  Fulfilled = "SET_FETCH_DATE_FULLFILED",
  Rejected = "SET_FETCH_DATE_REJECTED",
}

interface SetFetchDatePending extends Action {
  type: SetFetchDateActionType.Pending;
}

interface SetFetchDateFulfilled extends Action {
  type: SetFetchDateActionType.Fulfilled;
  payload: Date;
}

export type SetFetchDateActions = SetFetchDateFulfilled | SetFetchDatePending;
