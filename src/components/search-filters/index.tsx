// components/search-filters.tsx
import React from "react";
import SearchInput from "./search-input";
import { Categories } from "./categories";
import { CustomCategory } from "@/app/(home)/types";

interface SearchFiltersProps {
    data: CustomCategory[];        // or refine this later if you like
}

const SearchFilters = ({ data }: SearchFiltersProps) => (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">


        <SearchInput data={data} />
        <div className="hidden lg:block">
        <Categories data={data}/>
        </div>




    </div>
);

export default SearchFilters;
