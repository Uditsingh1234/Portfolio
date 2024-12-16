import React from 'react';
import SectionTittle from '../components/SectionTittle';
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Ensure experiences is defined before using it
    let experiences = portfolioData?.experiences || [];

    experiences = experiences.slice().reverse();

    return (
        <div className='my-10 blck'>
            <SectionTittle title="Experience" />

            <div className="flex py-10 gap-7 sm:flex-col ssm:gap-10">
                <div className='flex flex-col gap-4 items-center  w-60 sm:flex-row sm:overflow-x-scroll sm:w-full ssm:border p-2 overflow-hidden rounded-xl glasss'>
                    {experiences.length > 0 ? (
                        experiences.map((experience, index) => (
                            <div
                                key={index}
                                className='cursor-pointer w-[100%] sm:w-auto'
                                onClick={() => setselectedItemIndex(index)}
                            >
                                <h1 className={`text-xl ssm:text-sm p-2 text-left sm:whitespace-nowrap overflow-scroll  ${selectedItemIndex === index ? 'text-tertiary border border-primary rounded-lg -ml-[4px] bg-[#1a7f5a7e]' : 'text-text'}`}>
                                    {experience.period}
                                </h1>
                            </div>
                        ))
                    ) : (
                        <p className='text-text'>No experiences available</p>
                    )}
                </div>

                <div className='flex items-center justify-center gap-7 sm:flex-col  ssm:p-2 sm:p-4 p-8  rounded-xl w-full glasss'>
                    {experiences.length > 0 && selectedItemIndex !== null && (
                        <div className='flex flex-col ssm:gap-5 gap-5 sm:gap-5 w-full'>
                            <h1 className='text-secondary text-2xl ssm:text-xl'>{experiences[selectedItemIndex].title}</h1>
                            <h1 className='text-tertiary text-2xl ssm:text-xl'>{experiences[selectedItemIndex].company}</h1>
                            <p className='text-text text-sm ssm:text-sm ssm:text-center'>{experiences[selectedItemIndex].description || "No description available."}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
