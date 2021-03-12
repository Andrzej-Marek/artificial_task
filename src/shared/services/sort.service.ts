export const SortService = {
  sortDescByDate: <T>(array: T[], dateIndex: string): T[] => {
    return array.sort((a, b) => {
      return (
        new Date(b[dateIndex]).getTime() - new Date(a[dateIndex]).getTime()
      );
    });
  },
};
