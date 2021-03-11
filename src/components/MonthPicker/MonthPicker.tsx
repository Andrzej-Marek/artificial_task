import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface OwnProps {
  onSelectDate?: (date: Date) => void;
  selectedDate: Date;
}

type Props = OwnProps;

const DATE_FORMAT = "MM/yyyy";

const MonthPicker: FC<Props> = ({ onSelectDate, selectedDate }) => {
  const onChangeDateHandler = (date: Date) => {
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  return (
    <Box>
      <DatePicker
        selected={selectedDate}
        onChange={onChangeDateHandler}
        dateFormat={DATE_FORMAT}
        showMonthYearPicker
        showFullMonthYearPicker
      />
    </Box>
  );
};

export default MonthPicker;
