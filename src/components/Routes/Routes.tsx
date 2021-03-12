import React, { FC } from "react";

import { Route } from "react-router";
import { AskHNStartPage, AskHNStory } from "src/containers";
import { RouteUrl } from "src/shared/enums";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = () => {
  return (
    <>
      <Route path={RouteUrl.StartPage} component={AskHNStartPage} exact />
      <Route
        path={`${RouteUrl.JobsOffertes}/:objectId`}
        component={AskHNStory}
        exact
      />
    </>
  );
};

export default Routes;
