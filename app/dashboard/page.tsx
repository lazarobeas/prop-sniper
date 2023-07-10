'use client'
import Navbar from "@/app/dashboard/components/navbar";
import Instructions from "@/app/dashboard/components/instructions";
import SearchBox from "@/app/dashboard/components/search";
import Stats from "@/app/dashboard/components/stats";


export default function Dashboard() {
    return (
        <html>
        <Navbar/>
        <Stats/>
        <SearchBox/>
        </html>  )
}