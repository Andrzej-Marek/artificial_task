import { AskHNThred, AskHNThredItem } from "src/shared/types";

export interface AskHNThredStore {
  isPending: boolean;
  fetchDate: Date;
  threads: AskHNThred[];
  threadItem: AskHNThredItem | null;
  filteredJobsOfferts: AskHNThredItem[];
}
