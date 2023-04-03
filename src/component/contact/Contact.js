import React from 'react'
import "./contact.css"
import { motion } from 'framer-motion'
import p7 from "../../assets/p7.png"
import { Box, Button, Center, Grid, Textarea, TextInput } from '@mantine/core'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
export default function Contact() {
  return (
    <>
      <section id='contact'>
        <div className='container container-contact'>
          <motion.div
            animate={{
              rotate: 360,
              y: -20
            }}
          >

            <h3 style={{ color: "red" }}>Contact me</h3>
            <h2>Me </h2>

          </motion.div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat debitis impedit rem modi sunt facilis dolor quaerat, esse voluptatem facere tempora unde corporis magnam quod animi, asperiores amet eum cumque sequi veniam nihil error. Nihil quam dicta numquam autem nulla ad suscipit sit in esse adipisci! Esse, ad soluta.</p>
          <div className='conatct'>

            <div className='contact-form'>
              <h3>Contact Form</h3>
              <Grid>
                <Grid.Col>
                  <Box maw={320} mx="auto">
                    <TextInput mt="md" placeholder="Name" />
                    <TextInput mt="lg" placeholder="Email" />
                    <Textarea mt="lg" placeholder="Your comment" />
                    <Box mt="lg">
                      <motion.a className='btn' ><span> Submit</span></motion.a>
                    </Box>
                  </Box>
                </Grid.Col>
              </Grid>
            </div>
            <div className="contact-links">
              <img src={p7} alt="" />
            </div>
          </div>
        </div>
      </section>
      

    </>
  )
}
