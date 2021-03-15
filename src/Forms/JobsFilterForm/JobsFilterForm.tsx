import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/layout";
import { Formik } from "formik";
import {
  CheckboxField,
  FormFilterButtonContent,
  SelectField,
  TextField,
} from "src/components";
import {
  JOB_POSITIONS_OPTIONS,
  TECHNOLOGIES_OPTIONS,
} from "src/shared/selectOptions";
import { JobsFilterFormModel } from "./jobsFilterForm.types";
import { jobsFilterFormInitialValue } from "./jobsFilterForm.initialValues";

interface OwnProps {
  onSubmit: (values: JobsFilterFormModel) => void;
}

type Props = OwnProps;

const JobsFilterForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation("fields");
  return (
    <Box>
      <Formik<JobsFilterFormModel>
        initialValues={jobsFilterFormInitialValue}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <TextField name="textSearch" label={t("search")} />
            <SelectField
              options={TECHNOLOGIES_OPTIONS}
              name="technology"
              label={t("technology")}
              placeholder="All"
            />
            <SelectField
              options={JOB_POSITIONS_OPTIONS}
              name="jobPosition"
              label={t("jobPosition")}
              placeholder="All"
            />
            <CheckboxField label={t("remote")} name="isRemote" my={2} />
            <FormFilterButtonContent onReset={resetForm} />
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default JobsFilterForm;
