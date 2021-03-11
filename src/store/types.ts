import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AskHNThredStore } from "./askHNThred/types";

export interface ReduxStore {
  askHNThred: AskHNThredStore;
}

export interface ExtraArguments {}

export type ThunkResult<T extends Action> = ThunkAction<
  Promise<void> | void,
  ReduxStore,
  ExtraArguments,
  T
>;
