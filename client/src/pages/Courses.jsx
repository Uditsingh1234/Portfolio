import React from 'react'
// import { courses } from '../resources/courses';
import SectionTittle from '../components/SectionTittle'
import { useSelector } from 'react-redux';
import { FaInfoCircle } from "react-icons/fa";

function Courses() {
    // Set the default selected course to the first one (index 0)
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    let courses = portfolioData?.courses || {};
    courses = courses.slice().reverse();

    return (
        <div className='blck'>
            <SectionTittle title={"Certificate's"} />
            <div className="flex py-10 gap-7 sm:flex-col ssm:gap-10">
                <div className='flex flex-col gap-4 items-center  w-60 sm:flex-row sm:overflow-x-scroll sm:w-full ssm:border p-2 rounded-xl pr-1 glasss'>
                    {courses.map((crse, index) => (
                        <div
                            key={index}
                            className='cursor-pointer w-[100%] sm:w-auto '
                            onClick={() => setselectedItemIndex(index)}
                        >
                            <h1 className={`text-xl ssm:text-sm p-2 text-left sm:whitespace-nowrap overflow-scroll ${selectedItemIndex === index ? 'text-tertiary border border-primary rounded-lg -ml-[4px] bg-[#1a7f5a7e]' : 'text-text'}`}>
                                {crse.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-7 sm:flex-col  ssm:p-2 sm:p-4 p-8  rounded-xl w-full glasss  '>
                    {selectedItemIndex !== null && (
                        <>
                            <div className='flex flex-col ssm:gap-5 gap-5 sm:gap-5 w-full  '>
                                <h1 className='text-secondary text-2xl ssm:text-xl'>{courses[selectedItemIndex].title}</h1>
                                <p className="text-text text-sm ssm:text-sm ssm:text-center">{courses[selectedItemIndex].description}</p>
                                {/* <p className='text-white'></p> */}
                                <a href={courses[selectedItemIndex].link} target="_blank" className='w-[160px] sm:w-[160px] border border-tertiary text-text font-semibold py-2 pl-2 rounded-xl flex items-center gap-2 sm:text-sm text-sm'><FaInfoCircle /> Show Credentials </a>
                            </div>
                            <img src={courses[selectedItemIndex].image} alt="" className='h-full w-80 rounded-lg ssm:w-[90%]' />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Courses
