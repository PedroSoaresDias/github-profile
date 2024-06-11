'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Pesquisar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 200)

  return (
    <div className='flex flex-col'>
      <label htmlFor="username" className='dark:text-gray-50 text-gray-950 text-sm md:text-base sm:text-lg font-bold'>Digita o nome de usuário do GitHub</label>
      <input
        className='my-3 p-2 dark:bg-gray-950 bg-gray-50 shadow border-2 border-gray-800 dark:border-gray-300 shadow-gray-900 dark:shadow-gray-100 text-gray-950 dark:text-gray-50 rounded-lg text-base dark:placeholder:text-gray-400 placeholder:text-gray-800'
        placeholder={placeholder}
        onChange={(e) => { handleSearch(e.target.value) }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}