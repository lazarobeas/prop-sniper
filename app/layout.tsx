"use client"
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/home/footer";
import FAQs from "@/components/home/faqs";
import Signup from "@/components/home/signup";


import Box from "@/components/home/features";

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ChakraProvider>
      < Navbar />
      < Hero />
      < Features />
      < FAQs />
      < Signup />
      < Footer />
      {children}
    </ChakraProvider>
    </body>
    </html>
  )
}

