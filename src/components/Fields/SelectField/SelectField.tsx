import React, { FC, useMemo } from "react";
import { SelectOption } from "src/shared/types";
import {
  Box,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  SelectProps,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";

interface OwnProps {
  options: SelectOption[];
  name: string;
  label?: string;
  helperText?: string;
  formControlerProps?: FormControlProps;
  onSelect?: (selectOption: SelectOption) => void;
}

type Props = OwnProps & SelectProps;

const SelectField: FC<Props> = ({
  options,
  label,
  name,
  helperText,
  formControlerProps,
  onSelect,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name);

  const optionsList = useMemo(
    () =>
      options.map((option) => (
        <option value={option.value} key={option.value.toString()}>
          {option.label}
        </option>
      )),
    [options]
  );
  const hasError = !!error && touched;
  return (
    <Box>
      <FormControl name={name} {...formControlerProps}>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <Select
          {...field}
          {...rest}
          onSelect={field.onChange}
          borderColor="grey.500"
          height={{ base: "10", xl: "12" }}
          _focus={{ borderColor: "blue.500" }}
          _hover={{ borderColor: "blue.700" }}
        >
          {optionsList}
        </Select>

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

export default SelectField;
