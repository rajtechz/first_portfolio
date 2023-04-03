import React from 'react'
import "./service.css"
import { motion } from 'framer-motion';
import portfolio1 from "../../assets/portfolio1.jpg"
import portfolio2 from "../../assets/portfolio2.jpg"
import portfolio3 from "../../assets/portfolio3.jpg"
import portfolio4 from "../../assets/portfolio4.jpg"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio4.jpg"

export default function Service() {
  return (
    <>
      <section id='service'>
        <div className="container container-service">
          <motion.div
            animate={{
              rotate: 360,
              y: -20
            }}
          >
            <h3 style={{ color: "red" }}>My</h3>
            <h2>Services</h2>

          </motion.div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, animi explicabo sapiente est architecto obcaecati nobis repudiandae, quisquam vero sunt ut, tempore earum autem eligendi nam officia. Nemo quod reprehenderit ratione vel recusandae natus quasi voluptatum doloremque? Doloribus, mollitia. Repudiandae eos autem optio inventore ullam, eveniet eius atque quae nulla, vero consequatur itaque sunt sapiente at earum doloribus iure labore explicabo molestias cumque eaque assumenda! Quaerat rem rerum, nobis adipisci odio repellat tenetur in fugiat repellendus assumenda! Veritatis voluptatum laborum nemo tempora incidunt iure enim rerum. Perferendis, deleniti labore iusto ipsam, repudiandae assumenda ex, soluta deserunt at modi dolorem architecto.</p>
          <div>
            <div className='service-section'>
              <div>
                <img src={portfolio1} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
              <div>
                <img src={portfolio2} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
               <div>
                <img src={portfolio3} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
            </div>
             <div className='service-section'>
              <div>
                <img src={portfolio4} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
              <div>
                <img src={portfolio5} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
               <div>
                <img src={portfolio6} alt="" />
                <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
                <motion.a  className='btn' ><span> Demo</span></motion.a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
