import React from 'react'
import "./nav.css"
import { motion } from 'framer-motion'
import { AiFillHome, AiFillCustomerService } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { RiHeartsFill } from "react-icons/ri"
export default function Navbar() {
    return (
        <>
            <section id="navbar">
                <nav>
                    <motion.a href="#"
                        animate={{
                            scale: 1.2,
                            rotate: 360,

                        }}
                    ><AiFillHome /> </motion.a>
                    <motion.a href="#about"
                        animate={{
                            scale: 1.2,
                            rotate: 360,

                        }}
                    > <FaUserAlt /></motion.a>
                    <motion.a href="#service"
                        animate={{
                            scale: 1.2,
                            rotate: 360,

                        }}
                    >  <RiHeartsFill /></motion.a>
                    <motion.a href="#contact"
                        animate={{
                            scale: 1.2,
                            rotate: 360,

                        }}
                    ><AiFillCustomerService /></motion.a>
                </nav>
            </section>
        </>
    )
}
