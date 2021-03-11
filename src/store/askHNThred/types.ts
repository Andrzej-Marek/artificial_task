import { AskHNThred } from "src/shared/types";

export interface AskHNThredStore {
  isPending: boolean;
  fetchDate: Date;
  threads: AskHNThred[];
}
