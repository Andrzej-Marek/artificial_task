import { addDays, formatISO, subDays, format } from "date-fns";

export const TimeService = {
  now: (): Date => new Date(),
  getDateNBefore(date: string | Date, numberOfDays: number): Date {
    return subDays(new Date(date), numberOfDays);
  },
  getDateNAfter(date: string | Date, numberOfDays: number): Date {
    return addDays(new Date(date), numberOfDays);
  },
  toIso(date: Date | number): string {
    return formatISO(date);
  },
  getStringMonthAndYear(date: Date | number): string {
    return format(date, "LLLL yyyy");
  },
};
