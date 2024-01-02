'use client'
import Navbar from "@/app/components/navbar";
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