import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import { post } from '../../../routes/portfolioRoute';

function Hireme() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);
    // console.log(import.meta.env.VITE_EMAIL_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      setDialogVisible(true)
    }
  };

  return (
    <div>
      <div className="w-[100%] bg-primary min-h-[100vh] p-10 overflow-hidden flex items-center justify-center relative ssm:p-5">
        <div className="form w-[100%] max-w-[820px] bg-text rounded-lg overflow-hidden grid grid-cols-2 z-1000">
          <div className="contact-info p-9 relative">
            <h3 className="text-2xl font-semibold text-secondary">Let's get in touch</h3>
            <p className="text text-text mt-6 mb-8">
            Please fill out the form , and I’ll get back to you as soon as possible.
            </p>

            <div className="info">
              <div className="information flex my-3 items-center text-[0.95rem] text-text">
                <FaHome />
                <p className="ml-2">Tonk Phatak, Jaipur, Rajasthan</p>
              </div>
              <div className="information flex my-3 items-center text-[0.95rem] text-text">
                <MdEmail />
                <p className="ml-2">udit6706@gmail.com</p>
              </div>
              <div className="information flex my-3 items-center text-[0.95rem] text-text">
                <IoCall />
                <p className="ml-2">+91 6378210266</p>
              </div>
            </div>

            <div className="social-media pt-8">
              <p className="text-secondary">Connect with us :</p>
              <div className="flex flex-row mt-4 gap-4 sm:flex-row sm:mb-14 sm:gap-4 relative mb-2">
                {/* <div className="glower" onClick={()=>{
                  window.location.href = '#'
                }}>
                  <FaFacebook />
                </div> */}

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
                  window.open('https://www.linkedin.com/in/uditsingh12345', '_blank');
                }}>
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form bg-transparent relative">
            <form action="index.html" autoComplete="off" onSubmit={onSubmit}>
              <h3 className="title text-tertiary font-medium text-2xl mb-3">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="w-full bg-transparent px-5 py-2 text-text font-medium text-sm border rounded-[25px]"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="w-full bg-transparent px-5 py-2 text-text font-medium text-sm border rounded-[25px]"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="w-full bg-transparent px-5 py-2 text-text font-medium text-sm border rounded-[15px]"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send"
                className="px-[1.3rem] py-[0.6rem] border text-primary font-bold text-[1rem] bg-secondary rounded-2xl cursor-pointer m-0 hover:bg-transparent hover:text-text"
              />
            </form>
          </div>
        </div>
      </div>

      {dialogVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg glasss w-[50%] flex items-center justify-center flex-col gap-5 sm:w-[60%] ssm:w-[90%]">
            <h1 className="text-secondary text-4xl font-semibold ">Thank You</h1>
            <div className='w-full h-[200px]'>
              <dotlottie-player src="https://lottie.host/d9b1b640-5cc7-46df-8809-179bea30da22/MBgjiSwP3o.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
            </div>
            <p className="text-text text-xl text-center">Your message has been received. I will follow up with you shortly</p>
            <button
              className="btn"
              onClick={() => setDialogVisible(false)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hireme;
