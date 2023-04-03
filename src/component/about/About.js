import { motion } from 'framer-motion'
import React from 'react'
import "./about.css"
import Typewriter from 'typewriter-effect'
import p7 from "../../assets/p7.png"
import p5 from "../../assets/p5.png"
import { IoIosArrowForward } from "react-icons/io"
import Bars from 'react-bars';
export default function About() {
  return (
    <div id='about'>

      <section className='container container-about'>


        <motion.div  animate={{ rotate: 360,  y: -20  }}>
          <h3 style={{ color: "red" }}>Get to Know</h3>
          <h2>About me </h2>
        </motion.div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, eaque error. Dolorum tempore ex placeat, obcaecati qui soluta quae cupiditate optio beatae eum. Nostrum quas sunt doloremque ipsa possimus pariatur eum vitae. Officiis iusto fuga quos magni deserunt facere natus aperiam, dolorum sit asperiores fugit in dolore eius voluptate, maxime minus temporibus, ex perferendis laborum non blanditiis. Illo qui nulla, blanditiis nemo tempore soluta! Aliquid corporis aut officia officiis voluptates iste possimus non nisi. Cumque distinctio praesentium molestiae, nesciunt aspernatur voluptatum nulla incidunt in ad nemo id illo eum omnis ab dicta possimus quod nostrum veritatis doloremque sit maiores earum!</p>
        <div className="about-section">
          <motion.div className='left-section' animate={{  y: 20,  y: -20,              transition: {  y: { duration: 1.5 },                repeatType: "Infinity",
              },
            }}


          >
            <img src={p5} alt="" />
          </motion.div>
          <div className='right-section'>
            <h2>UI / UX Designer & Web Developer </h2>

            <div className='my-work'>
              <div>
                <ul>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Birthday : </b><a >1 May 1995 </a></li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Website : </b><a >www.example.com</a> </li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Mobile No : </b> <a >9876543210</a></li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>City : </b> <a >Noida</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Age : </b><a >23</a></li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Degree : </b><a >Diploma</a></li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Email : </b><a >hiitechz07@gmail.com</a></li>
                  <li><IoIosArrowForward style={{ color: "red" }} /><b>Freelancer : </b><a >Available</a></li>
                </ul>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error inventore libero consectetur ad consequatur doloremque, rerum id non deleniti, ea, voluptates adipisci hic eligendi maiores? A molestias temporibus et, ipsa recusandae quam ea. Ullam, praesentium deserunt neque at ad dolorem nostrum soluta aperiam officiis cum exercitationem perspiciatis eveniet mollitia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, inventore similique? Deleniti laborum veritatis facere ipsam delectus commodi quos accusamus! Hic expedita quibusdam facilis impedit atque. Deserunt eligendi nesciunt laborum, rerum veniam ratione velit? Eligendi placeat eum sit similique nam! Laudantium labore deleniti quod voluptatem unde nisi sint cum praesentium dolores eum! Facilis vitae, veritatis officiis ex in harum voluptates aliquam tenetur! Sit cum eius dolores ab sapiente ipsum. Quas repellendus dolorum voluptatum labore cupiditate exercitationem explicabo autem expedita eligendi aperiam. Eveniet commodi, amet laborum quibusdam, ab tempora velit facere aliquid exercitationem, molestias ut mollitia at magni quia facilis ipsam.</p>
          </div>

        </div>
      </section>

    </div>
  )
}
