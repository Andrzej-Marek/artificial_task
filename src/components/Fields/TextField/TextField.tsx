import React, { FC } from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";

interface OwnProps {
  name: string;
  label?: string;
  helperText?: string;
  formControlerProps?: FormControlProps;
  inputProps?: InputProps;
}

type Props = OwnProps;

const TextField: FC<Props> = ({
  name,
  helperText,
  label,
  formControlerProps = {},
  inputProps = {},
}) => {
  const [field, { error, touched }] = useField(name);

  const hasError = !!error && touched;
  return (
    <FormControl name={name} {...formControlerProps} position="relative">
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        {...field}
        {...inputProps}
        isInvalid={hasError}
        id={name}
        borderColor="grey.500"
        height={{ base: "10", xl: "12" }}
        _focus={{ borderColor: "blue.500" }}
        _hover={{ borderColor: "blue.700" }}
      />

      {hasError && <FormErrorMessage>{error}</FormErrorMessage>}

      {hasError && (
        <Text color="red.error" fontSize="small" my="2">
          {error}
        </Text>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextField;
