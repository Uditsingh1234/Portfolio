import React from 'react'
import SectionTittle from '../components/SectionTittle'
import { useSelector } from 'react-redux';

function About() {
    // const skills = [
    //     "Javascript",
    //     "React",
    //     "Redux",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    // ]
    const { loading, portfolioData } = useSelector((state) => state.root);
    const about = portfolioData?.abouts || {};
    const { skills, lotiUrl, description1, description2 } = about;
    return (
        <div>
            <SectionTittle title="About" />

            <div className="flex w-full items-center sm:flex-col mb-10 gap-3 px-8 ssm:px-0 blck">
                <div className=' sm:w-full p-5 flex items-center justify-center ssm:p-1 mt-10 '>
                    <div className='ssm:w-full blckk gloww '><img src={lotiUrl} alt="" className='' /></div>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full ssm:text-center ml-5 mt-10 ssm:ml-0'>
                    <p className='text-text '>{description1 || " "}</p>

                    <p className='text-text'>{description2 || " "}</p>
                </div>
            </div>

            <div className='py-10 blck'>
                <SectionTittle title="Skills" />
                <h1 className='text-tertiary text-xl ssm:text-center my-5'>Here are few technologies releted to my skills:</h1>
                <div className='flex flex-wrap gap-5 pt-5'>
                    {
                        skills.map((skills, index) => (
                            <div className='border border-tertiary rounded-xl py-3 px-10 cursor-pointer glasss'>
                                <h1 className='text-tertiary '>{skills || " "}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About
