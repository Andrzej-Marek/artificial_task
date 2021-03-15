import React, { FC } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MonthPickerWrapper } from "./monthPicker.styles";

interface OwnProps {
  onSelectDate?: (date: Date) => void;
  selectedDate: Date;
}

type Props = OwnProps & Omit<ReactDatePickerProps, "onChange">;

const DATE_FORMAT = "LLLL yyyy";

const MonthPicker: FC<Props> = ({ onSelectDate, selectedDate, ...rest }) => {
  const onChangeDateHandler = (date: Date) => {
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  return (
    <MonthPickerWrapper>
      <DatePicker
        {...rest}
        selected={selectedDate || new Date()}
        onChange={onChangeDateHandler}
        dateFormat={DATE_FORMAT}
        showMonthYearPicker
        showFullMonthYearPicker
      />
    </MonthPickerWrapper>
  );
};

export default MonthPicker;
