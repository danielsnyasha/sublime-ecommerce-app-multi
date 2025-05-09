import Footer from "@/components/(navbar)/footer";
import Navbar from "@/components/(navbar)/navbar";
import SearchFilters from "@/components/search-filters";
import { Category } from "@/payload-types";
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { CustomCategory } from "./types";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from "react";

interface Props {
    children: React.ReactNode;
}



const Layout = async ({ children }: Props) => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
      trpc.categories.getMany.queryOptions()
    )


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Suspense fallback={<p>Loading...</p>}>
            <SearchFilters/>
            </Suspense>
            </HydrationBoundary>
            <div className="flex-1 bg-[#F4F4F0]">
            {children}
            </div>
            

            <Footer/>

        </div>
    );
}

export default Layout;