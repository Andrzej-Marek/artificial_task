import React, { FC } from "react";
import { Box } from "@chakra-ui/layout";
import { Formik } from "formik";

interface OwnProps {}

type Props = OwnProps;

const JobsFilterForm: FC<Props> = () => {
  return (
    <Box>
      <Formik initialValues={{}} onSubmit={(values) => console.log("values")}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>Hello there</div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default JobsFilterForm;
