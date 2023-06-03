"use client"
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import FAQs from "@/components/faqs";
import Signup from "@/components/signup";


import Box from "@/components/features";

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

