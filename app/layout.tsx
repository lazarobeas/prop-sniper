"use client"
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider} from "@chakra-ui/next-js";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Footer from "@/app/components/footer";
import FAQs from "@/app/components/faqs";
import Signup from "@/app/components/signup";


import Box from "@/app/components/features";

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <CacheProvider>
    <ChakraProvider>
      {children}
    </ChakraProvider>
    </CacheProvider>
    </body>
    </html>
  )
}

