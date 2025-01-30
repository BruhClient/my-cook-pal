import type { Metadata } from "next";
import { Jockey_One, Jua } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryClientProvider";
import Footer from "@/components/Footer";
import Head from "next/head";

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
  keywords : ["NextJs" , "TypeScript","JavaScript"]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
