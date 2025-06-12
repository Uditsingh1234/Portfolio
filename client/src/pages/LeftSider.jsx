import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function LeftSider() {
    return (
        <div className="fixed left-0 bottom-0 px-10 sm:px-2 sm:static sm:pb-3">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-12 sm:flex-row sm:mb-14 sm:gap-4 relative mb-2">
                    
                    <div className="glower" onClick={()=>{
                        window.open('https://www.instagram.com/85.68.73.84', '_blank');
                    }}>
                        <FaInstagram />
                    </div>

                    <div className="glower" onClick={()=>{
                        window.open('https://www.github.com/Uditsingh1234', '_blank');
                    }}>
                        <FaGithub />
                    </div>

                    <div className="glower" onClick={()=>{
                        window.open('https://www.linkedin.com/in/i-am-udit', '_blank');
                    }}>
                        <FaLinkedin />
                    </div>
                    <div className="glower" onClick={()=>{
                        window.open('https://www.facebook.com/people/Udit-Singh/pfbid02sJej28EPkfwdC26gJQyfPQgiNLJ9USZuXUpTKwhEyTQ4vGECvugk6xMd4ZCfq4jQl/?mibextid=ZbWKwL', '_blank');
                    }}>
                        <FaFacebook />
                    </div>

                </div>
                <div className="w-[1px] h-80 bg-tertiary mt-1 sm:hidden"></div>
            </div>
        </div>
    );
}

export default LeftSider;
