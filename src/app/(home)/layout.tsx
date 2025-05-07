import Footer from "@/components/(navbar)/footer";
import Navbar from "@/components/(navbar)/navbar";
import SearchFilters from "@/components/search-filters";
import { Category } from "@/payload-types";
import configPromise from '@payload-config';
import { getPayload } from 'payload';

interface Props {
    children: React.ReactNode;
}



const Layout = async ({ children }: Props) => {
    const payload = await getPayload({
        // if your configPromise is a promise, await it; otherwise pass directly
        config: await configPromise,
      });
    
      const data = await payload.find({
        collection: "categories",
        pagination: false,
        depth: 1,
        where: {
          parent: {
            exists: false,
          }
        }
      });

      const formattedData = data.docs.map((doc)=>({
        ...doc,
        subcategories: (doc.subcategories?.docs?? []).map((doc)=>({
            ...(doc as Category),
            subcategories: undefined,
        }))
      }))


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <SearchFilters data={formattedData}/>
            <div className="flex-1 bg-[#F4F4F0]">
            {children}
            </div>
            

            <Footer/>

        </div>
    );
}

export default Layout;