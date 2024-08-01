"use client"
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import { Press_Start_2P } from 'next/font/google';
import TicTacToe from "./components/GameIcons/TicTacToe";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";

// Apply the font
const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className="h-screen w-screen">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col h-screen w-screen justify-center items-center relative z-10"
        >
          <nav className="fixed top-0 w-full z-10">
            <NavBar />
          </nav>
          <h1 className={`${pressStart2P.className} dark:text-white text-4xl font-extrabold absolute top-20`}>
            Show your Skills to your friends.
          </h1>
          <div className="">
            <TicTacToe />
          </div>

        </motion.div>
        <ShootingStars/>
        <StarsBackground />
    </main>
  );
}
