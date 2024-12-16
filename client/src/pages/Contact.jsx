import React from 'react';
import SectionTittle from '../components/SectionTittle';
import { useSelector } from 'react-redux';
import Google_srch from './Google_srch';
import Rough from './Rough';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);

    // Check if portfolioData and contacts are defined
    const contact = portfolioData?.contacts || {};
    // console.log(contact);
    // delete contact._id;

    return (
        <div className='blck'>
            <Google_srch />
            {/* <Rough /> */}
            <SectionTittle title={"Contact"} />

            <div className='flex sm:flex-col items-center justify-between p-10'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-tertiary text-sm'>{'{'}</h1>

                    {/* Check if the contact object has any keys */}
                    {Object.keys(contact).length > 0 ? (
                        Object.keys(contact).map((key) => (
                            key !== '_id' && <h1 key={key} className='ml-5'>
                                <span className='text-tertiary'> {key} :</span> <span className='text-tertiary'>{contact[key]}</span>
                            </h1>
                        ))
                    ) : (
                        <h1 className='text-tertiary'>No contact information available</h1>
                    )}

                    <h1 className='text-tertiary'>{'}'}</h1>
                </div>

                <div className='h-[300px]'>
                    <dotlottie-player
                        src="https://lottie.host/dd82eed9-6345-462e-a3bf-52a2ec421fa2/XLpOl9ZHQJ.json"
                        background="transparent"
                        speed="1"
                    ></dotlottie-player>
                </div>
            </div>

            
        </div>
    );
}

export default Contact;
