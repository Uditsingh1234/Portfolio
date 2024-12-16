import React from 'react';
import { useSelector } from 'react-redux';
import { FaChevronRight } from "react-icons/fa";
import LeftSider from './LeftSider';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const intro = portfolioData?.intros || {}; 
  const { firstName, lastName, welcomeText, description, caption } = intro;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hire-me');  // Navigates to the /hireme route
  };

<<<<<<< HEAD
  
=======
>>>>>>> 281f5c30d1661b30fb4a359282c01ae8033f2f85

  return (
    <div className=' bg-primary flex flex-col items-start justify-center gap-8 py-10 mx-2 blck '>
      <h1 className='text-text'>{welcomeText || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold nameanimmation'>{firstName || ''} {lastName || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-text font-semibold'>{caption || ''}</h1>
      <p className='text-text w-2/3 sm:w-full'> {description || ''}</p>
      {/* <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded  '>Hire me</button> */}
      <button className='btn flex items-center gap-3' onClick={handleClick}>Hire me <FaChevronRight /></button>
      <div className='lg:hidden sm:block sm:gap-2'><LeftSider /></div>
    </div>
  );
}

export default Intro;
