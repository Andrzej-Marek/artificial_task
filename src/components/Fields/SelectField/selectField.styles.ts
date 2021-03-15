import { Select } from "@chakra-ui/select";
import { styled } from "@chakra-ui/system";
import { GroupTypeBase, Styles } from "react-select";

export const selectFieldStyles: Partial<
  Styles<any, false, GroupTypeBase<any>>
> = {
  control: (base) => ({
    ...base,
    height: "100%",
    borderRadius: "0.375rem",
    borderColor: "#8F8D8D",
    boxShadow: "none",
    ":hover": {
      border: "1px solid #353A55",
    },
    ":focus": {
      border: "5px solid #605BFF",
    },
  }),
};

export const CustomSelect = styled(Select, {
  baseStyle: {
    height: { base: "10", xl: "12" },
  },
});
