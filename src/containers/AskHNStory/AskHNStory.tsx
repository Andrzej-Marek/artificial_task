import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { InfiniteScroll, JobOffert, Spinner } from "src/components";
import { ReduxStore } from "src/store";
import {
  fetchAskHNThreadItem,
  setFilteredJobsOfferts,
} from "src/store/askHNThred/actions";
import { JobsFilterForm } from "src/Forms";
import { JobsFilterFormModel } from "src/Forms/JobsFilterForm/jobsFilterForm.types";
import { filterJobsByJobsFilterFormArgs } from "./utils";

interface OwnProps {}

type Props = OwnProps;

const AskHNStory: FC<Props> = () => {
  const { t } = useTranslation(["errors", "loading", "askHNStoryPage"]);
  const params = useParams<{ objectId: string }>();
  const { isPending, threadItem, filteredJobsOfferts } = useSelector(
    (store: ReduxStore) => store.askHNThred
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!params.objectId) {
      return;
    }
    dispatch(fetchAskHNThreadItem({ objectId: params.objectId }));
  }, [dispatch, params]);

  const onJobsFilterFormSubmit = (values: JobsFilterFormModel) => {
    if (!threadItem) {
      return;
    }
    const jobsOfferts = filterJobsByJobsFilterFormArgs({
      jobsFilterFormModel: values,
      jobsOfferts: threadItem.children,
    });

    dispatch(setFilteredJobsOfferts({ jobsOfferts }));
  };

  if (isPending) {
    return <Spinner text={t("loading:loadingJobsOfferts")} />;
  }

  if (!threadItem) {
    return <Box>{t("errors:noJobsOfferts")}</Box>;
  }

  return (
    <Box>
      <Box textAlign="center">
        <Heading>{threadItem.title}</Heading>
      </Box>
      <Box>
        <Text>
          {t("askHNStoryPage:totalAmountOfJobsOfferts")}{" "}
          <Box as="span" fontWeight="700">
            {threadItem.children.length}
          </Box>
        </Text>
      </Box>
      <Box my={4} px={4} py={3} bg="white" boxShadow="md" borderRadius="md">
        <JobsFilterForm onSubmit={onJobsFilterFormSubmit} />
      </Box>
      {!filteredJobsOfferts.length && (
        <Box textAlign="center" my={3}>
          {t("errors:noJobsOffertsWithCurrentFilters")}
        </Box>
      )}
      <InfiniteScroll
        allItems={filteredJobsOfferts}
        amountPerLoad={20}
        renderElement={(el) => <JobOffert threadItem={el} key={el.id} />}
      />
    </Box>
  );
};

export default AskHNStory;
