import React from 'react'
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};
const About = () => {
  return (
   <>
    <h1 className='font-arial font-bold text-3xl pl-10 -mt-3'>
                <span className='underline underline-offset-[1rem] decoration-yellow-400 decoration-4  '>Ab</span>out Me</h1>

    <div className='bg-[#1e1e1e] text-white/70 p-6 font-sans ml-6 mt-7 rounded-xl'>
   
      <p className='mb-4'>
        I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began with a fascination for how websites work and the technologies behind them.
      </p>
      <p>
        I specialize in front-end development, focusing on building user-friendly interfaces using HTML, CSS, and JavaScript. I am also familiar with various frameworks and libraries that enhance the development process.
        
      </p>
      <p className='mt-4'>
        In my spare time, I enjoy learning new technologies and contributing to open-source projects, which helps me stay updated with industry trends and best practices.
      </p>
    
        <p className='mt-4'>
            
            My goal is to create web applications that not only meet user needs but also provide a seamless and enjoyable experience. I am always eager to learn and grow in this ever-evolving field.
        </p>
        </div>
        <h2 className="text-xl font-bold text-white mb-6 mt-14  flex items-center gap-3 capitalize">
                <span className="w-1 h-6 bg-yellow-400 inline-block rounded-sm  "></span>
                What i'm doing
                <img src="/work.jpg" alt="book" className="w-10  object-contain" />
            </h2>
<div 

className='flex flex-col md:flex-row gap-6 justify-between items-center px-10'>
        <motion.div 
        custom={ 1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
        <div className='flex items-center gap-4 mb-4'>
        <img src="/design.jpg" alt="Web Design" className="w-10 h-10 text-yellow-400" />
            <h1>WEB DESIGNING</h1>
            </div>
            <p>
                I create visually appealing and user-friendly web designs that enhance the user experience.
            </p>
        </motion.div>

        <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
              
        <div className="flex items-center gap-4 mb-4 uppercase">
      <img src="/app.jpg" alt="Web Design" className="w-10 h-10 text-yellow-400" />
      <h1 className="">Web development</h1>
    </div>
            <p>
                I build robust and scalable web applications that meet client requirements and industry standards.
            </p>
        </motion.div>

        
        </div>
        <div className='flex flex-col md:flex-row gap-6 justify-between items-center px-10 pt-6'>
        <motion.div 
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 capitalize hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
        <div className="flex items-center gap-4 mb-4 uppercase">
      <img src="/digital.jpg" alt="Web Design" className="w-10 h-10 text-yellow-400" />
            <h1>digital marketing</h1>
            </div>
            <p>
                I implement effective digital marketing strategies to enhance online presence and drive traffic.
            </p>
        </motion.div>

        <motion.div 
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
        <div className="flex items-center gap-4 mb-4 uppercase">
      <img src="/seo.jpg" alt="Web Design" className="w-10 h-10 text-yellow-400" />
            <h1>SEO OPTIMIZATION</h1>
            </div>
            <p>
                I optimize websites to improve search engine rankings and increase visibility in search results.
            </p>
        </motion.div>
        </div>



       
    
            

            
   
   </>
  )
}

export default About