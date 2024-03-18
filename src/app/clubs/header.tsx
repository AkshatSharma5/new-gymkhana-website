import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function Header({item} : {item:string}){
    return (<h1 className={`text-white text-6xl font-bold border-b-2 border-solid border-[#3B82F6] py-3 `}>
              <motion.span className={`text-[#3B82F6]`} initial={{color: "#FFFFFF",scale:1.1}} animate={{color: "#3B82F6",scale:1}} transition={{delay:0.5, duration: 1 }}>
              <div className="flex flex-col bg-opacity-0 h-2/3 xl:px-48 xl:py-40 px-12 py-24">
        <span><p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-Gold">Student's</p>
        <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white">Gymkhana</p></span><br></br>
        <p className="text-6xl font-bold text-white">IIT Indore</p>
        </div>
                </motion.span>
                
            </h1>
    )
}