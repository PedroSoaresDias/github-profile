'use client'

import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

const PAGINATION_STYLE = {
  BASE: 'flex h-10 w-10 items-center dark:text-white border-1 dark:border-white border-black text-black justify-center text-sm border',
  ACTIVE: 'z-10 bg-purple-600 border-purple-600 text-white',
  HOVER: 'hover:bg-purple-800',
  DISABLED: 'pointer-events-none dark:text-gray-300 text-gray-600',
}

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className='inline-flex' role='navigation' aria-label='Navegação de Páginas'>
      <PaginationArrow
        direction='left'
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className='flex -space-x-px'>
        {allPages.map((page) => (
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            page={page}
            isActive={currentPage === page}
            isFirstPage={page === 1}
            isLastPage={page === totalPages}
          />
        ))}
      </div>
      <PaginationArrow
        direction='right'
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
}

function PaginationNumber({ page, href, isActive, isFirstPage, isLastPage }: {
  page: number | string;
  href: string;
  isActive: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
}) {
  const className = clsx(
    PAGINATION_STYLE.BASE,
    {
      'rounded-l-md': isFirstPage,
      'rounded-r-md': isLastPage,
      [PAGINATION_STYLE.ACTIVE]: isActive,
      [PAGINATION_STYLE.HOVER]: !isActive,
      [PAGINATION_STYLE.BASE]: page,
    },
  );

  const ariaLabel = isActive ? `${page} (Página Atual)` : `Ir para a Página ${page}`;

  return isActive ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className} aria-label={ariaLabel} role='button' aria-current={isActive ? 'page' : undefined}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled, }: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    PAGINATION_STYLE.BASE,
    {
      [PAGINATION_STYLE.DISABLED]: isDisabled,
      [PAGINATION_STYLE.HOVER]: !isDisabled,
      'mr-2 rounded-md md:mr-4': direction === 'left',
      'ml-2 rounded-md md:ml-4': direction === 'right',
    },
  );

  const ariaLabel = isDisabled
    ? `${direction === 'left' ? 'Página Anterior' : 'Próxima Página'} (Desativado)`
    : `${direction === 'left' ? 'Página Anterior' : 'Próxima Página'}`;

  const icon = direction === 'left' ? <MdKeyboardDoubleArrowLeft className="w-4" /> : <MdKeyboardDoubleArrowRight className='w-4' />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className} aria-label={ariaLabel} role='button'>
      {icon}
    </Link>
  )
}