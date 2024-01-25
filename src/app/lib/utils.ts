const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const generatePagination = (currentPage: number, totalPages: number, maxVisiblePages: number = 7): Array<number | string> => {
  if (totalPages <= maxVisiblePages) return range(1, totalPages);

  const startPages = range(1, 2);
  const endPages = range(totalPages - 1, totalPages);
  const middlePages = range(currentPage - 1, currentPage + 1);

  return currentPage <= 3
    ? [...startPages, '...', ...endPages]
    : currentPage >= totalPages - 2
    ? [...startPages, '...', ...endPages]
    : [...startPages, '...', ...middlePages, '...', ...endPages];
};