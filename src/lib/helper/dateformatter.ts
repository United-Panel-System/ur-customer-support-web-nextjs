export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString(`en-MY`, {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  });
};
