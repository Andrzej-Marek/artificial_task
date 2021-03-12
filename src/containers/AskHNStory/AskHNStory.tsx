import React, { FC, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "src/components";
import { ReduxStore } from "src/store";
import { fetchAskHNThreadItems } from "src/store/askHNThred/actions";

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
    return <Spinner />;
  }
  if (!threadItem) {
    return <Box>Sorry, there is no job offerts :(</Box>;
  }
  return (
    <div>
      <Box textAlign="center">
        <Heading>{threadItem.title}</Heading>
      </Box>
    </div>
  );
};

export default AskHNStory;
