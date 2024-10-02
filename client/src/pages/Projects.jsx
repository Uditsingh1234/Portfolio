import React from 'react'
import SectionTittle from '../components/SectionTittle'
// import { projects } from '../resources/project';
import { useSelector } from 'react-redux';
import { FaGlobe, FaGithub } from "react-icons/fa";
// import {  } from "react-icons/fa";

function Projects() {
    // Set the default selected project to the first one (index 0)
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    let projects = portfolioData?.projects || [];

    // Reverse the projects array
    projects = projects.slice().reverse();

    return (
        <div className='blck'>
            <SectionTittle title={"Projects"} />
            <div className="flex py-10 gap-7 sm:flex-col ssm:gap-10 mb-16">
                <div className='flex flex-col gap-4 items-center  w-60 sm:flex-row sm:overflow-x-scroll sm:w-full ssm:border p-2 rounded-xl pr-1 glasss'>
                    {projects.map((prjct, index) => (
                        <div
                            key={index}
                            className='cursor-pointer w-[100%] sm:w-auto '
                            onClick={() => setselectedItemIndex(index)}
                        >
                            <h1 className={`text-xl ssm:text-sm p-2 text-left sm:whitespace-nowrap overflow-scroll ${selectedItemIndex === index ? 'text-tertiary border border-primary rounded-lg -ml-[4px] bg-[#1a7f5a7e]' : 'text-text'}`}>
                                {prjct.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-7 sm:flex-col  ssm:p-2 sm:p-4 p-8  rounded-xl w-full glasss'>
                    {selectedItemIndex !== null && (
                        <>
                            <img src={projects[selectedItemIndex].image} alt="" className='h-full w-80 rounded-lg ssm:w-[90%]' />
                            <div className='flex flex-col ssm:gap-5 gap-5 sm:gap-5 w-full'>
                                <h1 className='text-secondary text-2xl ssm:text-xl '>{projects[selectedItemIndex].title}</h1>
                                <p className="text-text text-sm ssm:text-sm ssm:text-center">{projects[selectedItemIndex].description1}</p>
                                <p className='text-text text-sm ssm:text-sm ssm:text-center'>{projects[selectedItemIndex].description2}</p>
                                <p className='text-tertiary text-sm ssm:text-sm ssm:text-center'>Technologies: {projects[selectedItemIndex].technologies.join(', ')}</p>
                                <div className='flex items-center gap-3 flex-row'>
                                    <a href={projects[selectedItemIndex].url} target="_blank" className='w-full bg-white py-2 pl-2 text-red-700 font-extrabold rounded-lg flex items-center gap-2 sm:text-xl text-sm border border-text' ><FaGlobe/> Live</a>
                                    <a href={projects[selectedItemIndex].githubrepo} target="_blank" className='w-full bg-black text-white font-semibold py-2 pl-2 rounded-lg flex items-center gap-2 sm:text-xl text-sm border border-primary'><FaGithub />GitHub </a>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
