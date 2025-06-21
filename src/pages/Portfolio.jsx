import React from 'react'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing my skills and projects.'
        },
        {
            id: 2,
            title: 'E-commerce Website',
            description: 'An e-commerce platform with product listings, cart functionality, and payment integration.'
        },
        {
            id: 3,
            title: 'Blog Platform',
            description: 'A blogging platform where users can create, edit, and comment on posts.'
        }
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
                    <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Project {project.id}</h3>
                        <h1 className='text-xl font-semibold text-white mb-2'>{project.title}</h1>
                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>
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