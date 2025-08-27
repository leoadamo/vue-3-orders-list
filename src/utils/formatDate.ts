// DEPENDENCIES
import { format, parseISO } from "date-fns";

/**
 * Formats the order creation date.
 *
 * @param {string} dateString The date string to format.
 * @returns {string} The formatted date string.
 */
export function formatOrderDate(dateString: string): string {
  try {
    const date = parseISO(dateString);

    return format(date, "yyyy-MM-dd 'at' HH:mm:ss");
  } catch {
    return "Invalid date";
  }
}
