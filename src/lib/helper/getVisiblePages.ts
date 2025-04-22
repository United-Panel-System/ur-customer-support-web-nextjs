export function getVisiblePages(
  currentPage: number,
  totalPages: number,
): (number | "...")[] {
  const delta = 1;
  const range: (number | "...")[] = [];
  let left = currentPage - delta;
  let right = currentPage + delta;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i <= right)) {
      range.push(i);
    } else if (range[range.length - 1] !== "...") {
      range.push("...");
    }
  }

  return range;
}
