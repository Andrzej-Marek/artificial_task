import React, { FC } from "react";
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";

interface OwnProps {
  name: string;
  label?: string;
  helperText?: string;
  formControlerProps?: FormControlProps;
}

type Props = OwnProps & CheckboxProps;

const CheckboxField: FC<Props> = ({
  label,
  name,
  helperText,
  formControlerProps,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name);

  const hasError = !!error && touched;
  return (
    <Box>
      <FormControl name={name} {...formControlerProps}>
        <Checkbox {...field} {...rest}>
          {label}
        </Checkbox>

        {hasError && <FormErrorMessage>{error}</FormErrorMessage>}
        {hasError && (
          <Text color="red.error" fontSize="small" my="2">
            {error}
          </Text>
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default CheckboxField;
