import React, { FC, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { InfiniteScroll, JobOffert, Spinner } from "src/components";
import { ReduxStore } from "src/store";
import { fetchAskHNThreadItems } from "src/store/askHNThred/actions";
import { JobsFilterForm } from "src/Forms";

interface OwnProps {}

type Props = OwnProps;

const AskHNStory: FC<Props> = () => {
  const params = useParams<{ objectId: string }>();
  const { isPending, threadItem } = useSelector(
    (store: ReduxStore) => store.askHNThred
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!params.objectId) {
      return;
    }
    dispatch(fetchAskHNThreadItems({ objectId: params.objectId }));
  }, [dispatch, params]);

  if (isPending) {
    return (
      <Spinner text="Please give us a moment, currently we loading all jobs offerts for you" />
    );
  }

  if (!threadItem) {
    return <Box>Sorry, there is no job offerts :(</Box>;
  }

  return (
    <Box>
      <Box textAlign="center">
        <Heading>{threadItem.title}</Heading>
      </Box>
      <Box>
        <Text>Total amount of jobs offerts: {threadItem.children.length}</Text>
      </Box>
      <JobsFilterForm />
      <InfiniteScroll
        allItems={threadItem.children}
        amountPerLoad={20}
        renderElement={(el) => <JobOffert threadItem={el} key={el.id} />}
      />
    </Box>
  );
};

export default AskHNStory;
