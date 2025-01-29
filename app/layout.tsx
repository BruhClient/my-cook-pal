import type { Metadata } from "next";
import { Geist, Geist_Mono, Jockey_One, Jua } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryClientProvider";
import { Suspense } from "react";
import RecommendedRecipes from "@/components/FeaturedRecipes";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "@/components/Footer";

const jockeyOne = Jockey_One({
  weight :["400"],
  subsets:["latin"] ,  
  variable : "--font-jockey" , 
})

const jua = Jua({
  weight :["400"],
  subsets:["latin"] ,  
  variable : "--font-jua" , 
})


export const metadata: Metadata = {
  title: "My cook pal",
  description: "Coded and designed by Travis Ang",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jockeyOne.variable} ${jua.variable} font-jua antialiased`}
      >
        
          <ThemeProvider
              
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <QueryProvider>
              <Navbar />
              <div className="pt-24">
                {children}
              </div>
              
              
              <Footer />
              </QueryProvider>
            </ThemeProvider>
        

      </body>
    </html>
  );
}
