function formatDateWithTimezoneOffset(offsetHours) {
  // Get the current date
  const now = new Date();

  // Calculate the timezone offset in milliseconds
  const offsetMillis = offsetHours * 60 * 60 * 1000;

  // Adjust the date for the given timezone offset
  const adjustedDate = new Date(now.getTime() + offsetMillis);

  // Define options for formatting the date
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  // Format the date
  const formattedDate = adjustedDate.toLocaleDateString("en-GB", options);

  // Return the formatted string
  return `Today is ${formattedDate}`;
}
export default formatDateWithTimezoneOffset;
