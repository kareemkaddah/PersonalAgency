import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const notify = () => toast('Contact us on kontakt@kaddah.de');
  return (
    <div>
      <p className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
        Get In <span className='text-[#503d74]'>Touch</span>
      </p>
      <p className='mt-5 text-gray-400'>
        Have a project in mind or just want to say hi? we'd love to hear from
        you
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
