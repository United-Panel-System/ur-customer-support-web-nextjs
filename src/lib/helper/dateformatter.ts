import { format } from 'date-fns';

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return format(date, 'dd MMMM yyyy'); // Example: 13 June 2025
};
