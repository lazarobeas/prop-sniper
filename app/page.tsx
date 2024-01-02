'use client'
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import FAQs from "@/app/components/faqs";
import Signup from "@/app/components/signup";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
      <html lang="en">
      <body>
          < Navbar />
          < Hero />
          < Features />
          < FAQs />
          < Signup />
          < Footer />
      </body>
      </html>  )
}


