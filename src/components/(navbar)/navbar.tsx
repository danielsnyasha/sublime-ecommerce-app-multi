'use client'

import Link from "next/link";
import { Poppins } from "next/font/google";


import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

interface NavbarItemProps {
href: string;
children: React.ReactNode;
isActive: boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive

}: NavbarItemProps) => {
    return (
        <Button asChild className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-md",
            isActive && "bg-black text-white hover:bg-black hover:text-white"
        )} variant={"outline"}>
            <Link href={href}>
            {children}
            </Link>
          
        </Button>
    )
}

const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/features", children: "Features"},
    {href: "/pricing", children: "Pricing"},
    {href: "/contact", children: "Contact"},

];

const poppins =  Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)


    return ( 
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
            <span className={cn("text-4xl font-semibold", poppins.className)}>Sublime</span>
            </Link>

            <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem
                        isActive={pathname === item.href} key={item.href}
                        {...item}>
                            {item.children}
                        </NavbarItem>
                ))}

            </div>

            <div className="hidden lg:flex">
                <Button asChild className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-rose-500 hover:text-white transition-colors text-black text-lg">
                    <Link href="/sign-in">Login</Link>
                    
                    </Button>
                <Button asChild className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-gray-700 hover:bg-rose-500 hover:text-black transition-colors text-white text-lg">
                    <Link href="/sign-up">Start Selling</Link>
                    
                    </Button>
            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button variant={"ghost"} className="size-12 border-transparent bg-white mr-1" onClick={()=> setIsSidebarOpen(true)}>
                    <MenuIcon/>
                </Button>

            </div>

        </nav>
     );
}
 
export default Navbar;