"use client"

import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

 
const Footer = () => {
    return ( <footer className="w-full bg-primary h-[200px] mt-8 justify-center items-center">
        {/*  Desktop Navbar   */}
        <div className="flex justify-center items-center h-full flex-col gap-2 ">
            <div className="flex gap-1">
                <Button size={"icon"} variant={"outline"}><Link href={"https://www.instagram.com/____travisang____"}><Instagram /></Link></Button>
                <Button size={"icon"} variant={"outline"}><Link href={"https://www.instagram.com/____travisang____"}><Github /></Link></Button>
                <Button size={"icon"} variant={"outline"}><Link href={"https://www.instagram.com/____travisang____"}><Youtube /></Link></Button>
                <Button size={"icon"} variant={"outline"}><Link href={"https://www.instagram.com/____travisang____"}><Linkedin /></Link></Button>
            </div>
            <div className="flex items-center flex-col justify-center ">
                <Button variant={"link"}><Link  href={"https://www.instagram.com/____travisang____"} className="text-black" >Privacy</Link></Button>
                <Button variant={"link"}><Link  href={"https://www.instagram.com/____travisang____"} className="text-black" >Feedback</Link></Button>
                <Button variant={"link"}><Link  href={"https://www.instagram.com/____travisang____"} className="text-black" >Terms and Condtions</Link></Button>
            </div>
            
            

        </div>
    </footer> );
}
 
export default Footer;