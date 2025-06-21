import React from 'react'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: 'GYM Website',
            sitename: 'FITLIFE',
            description: 'A responsive gym website with features like class schedules, trainer profiles, and membership plans.',
            image: '/projects/fit.jpg',
            link: 'https://fitlife-olive.vercel.app/'
        },
        {
            id: 2,
            title: 'RELEGIOUS Website',
            sitename: 'SIKHISM ',
            description: 'A religious website that provides information about various religious texts, events, and community activities.',
            image: '/projects/gurudwara.jpg',
            link: 'https://gurudwaras-information-nbpa.vercel.app/' 
        },
        {
            id: 3,
            title: 'NEWS Website',
            sitename: 'JM NEWS',
            description: 'A news website that aggregates the latest news articles from various sources, providing users with up-to-date information.',
            image: '/projects/news.jpg',
            link: 'https://github.com/Jasssaini439/News-app' 
        },
        {
            id: 4,
            title: 'TRAVEL Website',
            sitename: 'TOUR AND TRAVEL',
            description: 'A travel website that offers information on popular destinations, travel tips, and booking options for travelers.',
            image: '/projects/travel.jpg',
            link: 'https://github.com/Jasssaini439/Travel-website' 
        },
       
    ];

    return (
        <>
         <h1 className='font-arial font-bold text-3xl pl-10 -mt-3'>
         <span className='underline underline-offset-[1rem] decoration-yellow-400 decoration-4 '>Po</span>rtfolio</h1>


      <div className='pl-10'>
            <h2 className="text-2xl font-bold text-white mb-6 mt-14  flex items-center gap-3 uppercase">
                <span className="w-1 h-6 bg-yellow-400 inline-block rounded-sm  "></span>
                Projects
                <img src="/project.jpg" alt="book" className="w-10  object-contain" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-[#2c2c2c] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
                   <a href={project.link}>
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                    </a>
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-yellow-400">{project.sitename}</p>
                      <a
          href={project.link}
          className="block md:hidden mt-3 text-center bg-yellow-400/80 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
        >
          Read More
        </a>
                    </div>
                  </div>

                  
                    

                ))}
            </div>







            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-yellow-400 inline-block rounded-sm"></span>

                Internships
                <img src="/educations.jpg" alt="book" className="w-10  object-contain" />
            </h2>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
  <h2 className="text-xl font-bold text-yellow-400 mb-1">MERN Stack Intern</h2>
  <p className="text-white font-semibold">Solitaire Infosys Pvt. Ltd. · Sep 2024 – Mar 2025</p>
  <p className="text-gray-400 mt-2 text-sm">
    Successfully completed a 6-month internship at Solitaire Infosys where I worked on building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
    Contributed to both frontend and backend development, integrated REST APIs, optimized application performance, and collaborated using Git and Agile practices.
  </p>
  <ul className="text-gray-400 list-disc list-inside text-sm mt-2 space-y-1">
  <li>Developed full-stack applications using MongoDB, Express, React, and Node.js</li>
  <li>Built REST APIs and integrated them with React frontends</li>
  <li>Worked in Agile teams and used Git/GitHub for version control</li>
  <li>Improved UI responsiveness and performance using React best practices</li>
</ul>
</div>
</div>
        </>
    )
}

export default Portfolio