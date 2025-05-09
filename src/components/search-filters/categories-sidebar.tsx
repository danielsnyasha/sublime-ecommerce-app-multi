import { CustomCategory } from '@/app/(home)/types';
import React, { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';


type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[];
}

export default function CategoriesSidebar({

    open,
    onOpenChange,
    data
}: Props) {

    const router = useRouter()
    const [parentCategories, setParentCategories] = useState<CustomCategory[] | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<CustomCategory[] | null>(null);

    const currentCategories = parentCategories ?? data ?? [];

    const handleOpenChange = (open: boolean) => {
        setSelectedCategory(null);
        setParentCategories(null);
        onOpenChange(open)
    }

    const handleCategoryClick = (category: CustomCategory) => {
        if (category.subcategories && category.subcategories.length > 0) {
          setParentCategories(category.subcategories as CustomCategory[]);
          setSelectedCategory(category);
          // ✅ DON'T close sidebar here
        } else {
          if (parentCategories && selectedCategory) {
            router.push(`/${selectedCategory.slug}/${category.slug}`);
          } else {
            if (category.slug === "all") {
              router.push("/");
            } else {
              router.push(`/${category.slug}`);
            }
          }
      
          handleOpenChange(false); // ✅ ONLY close sidebar here
        }
      };

      const backgroundColor = selectedCategory?.color || "white";
      


    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent side='left' className='p-0 transition-none' style={{ backgroundColor }}>

                <SheetHeader className='p-4 border-b'>

                    <SheetTitle>Categories</SheetTitle>


                </SheetHeader>
                <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
                    {parentCategories && (
                        <button
                            onClick={() => {
                                setParentCategories(null);
                                setSelectedCategory(null);
                            }}
                            className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'
                        >
                            <ChevronLeftIcon className='size-4 mr-2' />
                            Back
                        </button>
                    )}
                    {currentCategories.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => handleCategoryClick(category)} // ✅ add this line exactly
                            className='w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer'
                        >
                            {category.name}
                            {category.subcategories && category.subcategories.length > 0 && (
                                <ChevronRightIcon className='size-4' />
                            )}
                        </button>
                    ))}
                </ScrollArea>

            </SheetContent>



        </Sheet>
    )
}