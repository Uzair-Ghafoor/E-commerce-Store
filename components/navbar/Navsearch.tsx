'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const Navsearch = () => {
  const params = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(params.get('search')?.toString() || '');
  const handleSearch = useDebouncedCallback((value: string) => {
    const param = new URLSearchParams(params);
    if (value) {
      param.set('search', value);
    } else {
      param.delete('search');
    }
    replace(`/products?${param.toString()}`);
  }, 300);

  useEffect(() => {
    if (!params.get('search')) {
      setSearch('');
    }
  }, [params]);

  return (
    <Input
      type='search'
      placeholder='Search....'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default Navsearch;
