import React from 'react'

const Home = () => {

    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 75 }


    ]

    const education = [
        {
            Done: 'graduation',
            school: 'GSSDGS Khalsa College , Patiala',
            years: '2021 - 2024',
            description: " Completed B.C.A. in Computer Applications with a focus on web development and programming, maintaining a CGPA of 8.5/10, which reflects strong academic performance and dedication to the field.",
        },
        {
            Done: 'Higher Secondary',
            school: 'kendriya vidyalaya no 2 , Patiala',
            years: '2020 - 2021',
            description:
                'Completed Higher Secondary in the Non-Medical stream (PCM) with 80%, demonstrating a strong focus on analytical and problem-solving skills.',
        },
        {
            Done: 'matriculation',
            school: 'Kendriya Vidyalaya No 2 , Patiala',
            years: '2018 — 2019',
            description:
                'Completed Matriculation with a focus on Science and Mathematics with 70%, achieving a solid foundation in core subjects.',
        },
    ];


    return (
        <>


            <h1 className='font-arial font-bold text-3xl pl-10 -mt-3'>
                <span className='underline underline-offset-[1rem] decoration-yellow-400 decoration-4 '>Re</span>sume</h1>

            <div className="pt-16 px-10 min-h-screen">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-yellow-400 inline-block rounded-sm"></span>

                    Education
                    <img src="/book.jpg" alt="book" className="w-6 h-6 object-contain" />
                </h2>


                {education.map((item, index) => (
                    <div key={index} className="mb-11 ml-8 ">

                        <h1 className="text-lg font-semibold text-yellow-400 flex items-center gap-2 uppercase mb-3">
                            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full  "></span>{item.Done}
                        </h1>
                        <div className='ml-3'>
                            <h3 className="text-lg font-semibold text-white ">{item.school}</h3>
                            <p className="text-sm text-gray-400 italic mb-3">{item.years}</p>
                            <p className="text-lg text-gray-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>







            <div className=" px-10 ">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 uppercase">
                    <span className="w-1 h-6 bg-yellow-400 inline-block rounded
                        -sm"></span>
                    my Skills
                    <img src="/skill.jpg" alt="skills" className="w-9 object-contain" />
                </h2>

                <div className='bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8'>
                    <p className="text-lg text-gray-400 mb-4">
                        I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. I have experience in building responsive and user-friendly web applications. My goal is to continuously improve my skills and contribute to innovative projects.
                    </p>

                    {skills.map((skill) => (
                        <div key={skill.name} className="mb-6 mt-11" >
                            <div className="flex justify-between items-center ">
                                <p className="text-sm font-serif">{skill.name} : <span className=" text-yellow-500">{skill.level}%</span></p>
                                <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-3 mt-1">
                                <div
                                    className="bg-yellow-500 rounded-full h-3"
                                    style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>











        </>
    )
}

export default Home