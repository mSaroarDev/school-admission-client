export const convertDateEn = (dateStr) => {
  // Parse the ISO date string to a Date object
  const date = new Date(dateStr);

  // Extract the day, month, and year from the Date object
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getUTCFullYear();

  // Format the date as "DD/MM/YYYY"
  return `${day}/${month}/${year}`;
};
