'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollingButtonProps {
    onClick?: () => void;
    text:string;
    className?:string;
    color?:string;
    textColor?:string;
}




export default function ScrollingButton({ onClick,text,className, color, textColor }: ScrollingButtonProps) {
    const [isHover, setIsHover] = useState(false)

    return (
        <motion.button onHoverStart={()=>setIsHover(true)} onHoverEnd={()=>setIsHover(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={className === undefined?` ${color || "bg-black" } rounded-lg w-32 overflow-hidden ${textColor||"text-white"} font-vina hover:shadow-2xl shadow-slate-700 text-2xl px-4 py-2 mt-4`:className}>
            <AnimatePresence  >
                <div className="flex flex-row">
                {isHover && (<motion.div initial={{ x: 0}} animate={{ x: -500 }} transition={{ repeat: Infinity,velocity:1,easings:0.5, duration:15, ease: "linear" }} className="flex flex-row w-40">
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                    <motion.a className="mr-3 inline">{text} </motion.a>
                </motion.div>)}
                </div>
            </AnimatePresence>
            {!isHover && <div className="">
                {text} 
            </div>}

        </motion.button>
    )
}
