import { JobsFilterFormModel } from "src/Forms/JobsFilterForm/jobsFilterForm.types";
import { AskHNThredItem } from "src/shared/types";
import { filterWithTextRegex } from "src/shared/utils";

interface Args {
  jobsFilterFormModel: JobsFilterFormModel;
  jobsOfferts: AskHNThredItem[];
}
export const filterJobsByJobsFilterFormArgs = ({
  jobsFilterFormModel,
  jobsOfferts,
}: Args): AskHNThredItem[] => {
  const { technology, jobPosition, textSearch, isRemote } = jobsFilterFormModel;

  const IS_REMOTE_QUERY = isRemote ? "remote" : "";

  const filteredArray = jobsOfferts.filter(
    (jobOffert) =>
      filterWithTextRegex(technology, jobOffert.text) &&
      filterWithTextRegex(jobPosition, jobOffert.text) &&
      filterWithTextRegex(textSearch, jobOffert.text) &&
      filterWithTextRegex(IS_REMOTE_QUERY, jobOffert.text)
  );

  return filteredArray;
};
