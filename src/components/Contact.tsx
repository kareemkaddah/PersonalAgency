import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const notify = () => toast('Email: kontakt@kdagency.online');
  return (
    <div id='contact' className='text-center'>
      <p className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
        Get In <span className='text-[#503d74]'>Touch</span>
      </p>
      <p className='mt-5 text-2xl  text-gray-400'>
        Have a project in mind or need a custom solution? Just send us an email
        with a short description of your project and what features or
        functionality you’re looking for — and we’ll send you a free quote and
        start building it for you!
      </p>
      <div className='mt-8'>
        <a
          onClick={notify}
          className='cursor-pointer bg-lime-400  px-4 py-2 rounded shadow-lg
no-underline transition transform duration-500
hover:bg-[#503d74] hover:scale-105 hover:shadow-fuchsia-950'
        >
          Send an Email
        </a>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </div>
    </div>
  );
}
export default Contact;
