// components/search-filters.tsx
import React from "react";
import SearchInput from "./search-input";
import { Categories } from "./categories";
import { CustomCategory } from "@/app/(home)/types";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface SearchFiltersProps {
  data: CustomCategory[];
}

const SearchFilters = ({ }: SearchFiltersProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
};

export default SearchFilters;
