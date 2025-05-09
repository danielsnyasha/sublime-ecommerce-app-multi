'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';

const Home = () => {
  const trpc = useTRPC();

  const categoriesQuery = useQuery(
    trpc.categories.getMany.queryOptions()
  );

  if (categoriesQuery.isLoading) return <div>Loading...</div>;
  if (categoriesQuery.isError) return <div>Error loading categories</div>;

  return (
    <div>
      <p>is loading: {`${categoriesQuery.isLoading}`}</p>
      {JSON.stringify(categoriesQuery.data, null, 2)}
    </div>
  );
};

export default Home;
