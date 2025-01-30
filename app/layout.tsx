import type { Metadata } from "next";
import { Jockey_One, Jua } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryClientProvider";
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
  keywords : ["NextJs" , "TypeScript","JavaScript"], 
  metadataBase : new URL("https://my-cook-pal.vercel.app"), 
  twitter : { 
    card: "summary_large_image", 
    site : "https://my-cook-pal.vercel.app", 
    creator : "@TravisAng", 
    title : "My Cook Pal - Recipe App", 
    description : "Find a recipe that suits ur taste buds", 
    images: ["feature.png"]
  }, 
  openGraph : { 
    title : "My Cook Pal - Recipe App", 
    description : "Find a recipe that suits ur taste buds", 
    url : "https://my-cook-pal.vercel.app",
    siteName :"My Cook Pal",
    images: ["feature.png"], 

  }


  
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
