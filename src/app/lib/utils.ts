export const generatePagination = (currentPage: number, totalPages: number) => {
  const maxVisiblePages = 7;

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const startPages = [1, 2, 3];
  const endPages = [totalPages - 1, totalPages];
  const middlePages = [currentPage - 1, currentPage, currentPage + 1];

  if (currentPage <= 3) {
    return [...startPages, '...', ...endPages];
  }

  if (currentPage >= totalPages - 2) {
    return [...startPages, '...', totalPages - 2, ...endPages];
  }

  return [startPages[0], '...', ...middlePages, '...', endPages[0]];
};