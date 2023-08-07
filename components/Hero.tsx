'use client'

import im from "../assets/hero-gradient.svg";
import portrait from "../assets/portrait.png";
import Image from "next/image";
import { motion } from "framer-motion"
import ScrollingButton from "./ScrollingButton";


export default function Hero() {

    return (
        <div className="w-full relative  rounded-3xl h-full flex flex-row justify-around items-center overflow-hidden" >
            <Image src={im} alt="hero" layout="fill" objectFit="cover" className="rounded-3xl absolute " />
            <div className="z-30  flex flex-col  w-[50%]">
                <h1 className="font-rubik flex-col flex">
                    <span className="text-4xl">Hi, I'm </span>
                    <span className="text-6xl text-white">Youssef Elmofaker</span>
                    <span className="text-4xl">Creative Full Stack Web Developer</span>
                </h1>
                <ScrollingButton text="Contact" />
            </div>
            
            <div className="z-30 flex flex-col items-end justify-end overflow-hidden bg-white w-[25%] aspect-square rounded-full">
                <Image src={portrait} alt="hero" className="rounded-3xl " />
            </div>
        </div>
    )

}