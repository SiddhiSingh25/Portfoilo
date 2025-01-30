// import { useState } from 'react';
// import ProfileNav from '../Profile/ProfileNav';
// import { IoMdSend } from "react-icons/io";
// function Message() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };
//     function Submit(e) {
//         e.preventDefault();
//         const formEle = document.querySelector("form");
//         const formDatab = new FormData(formEle);
//         fetch(
//           "https://script.google.com/macros/s/AKfycbybqmQlp7V9VrdhtUcuioZW1XNFHYLOyAQFbIBeJi_0iLi0keGtcfepnSCpFNeacV32gA/exec",
//           {
//             method: "POST",
//             body: formDatab
//           }
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }

//     return (
//         <>
//         <ProfileNav/>
//         <div className='w-full max-w-md mx-auto p-4 bg-lightModeBg dark:bg-darkModeBg rounded-lg shadow-lg mt-10 border-[0.001rem] border-solid border-red-50'>
//             <h2 className='text-lightModeHeading dark:text-darkModeHeading text-2xl flex items-center justify-start gap-2 font-bold mb-4 roboto-bold'><IoMdSend className='size-5 inline basic'/> <p className='inline basic bold'>Send me a message</p></h2>
//             <form onSubmit={(e) => Submit(e)} className='space-y-4'>
//                 <div>
//                     <label htmlFor='name' className='block text-lightModeText dark:text-darkModeText mb-1'>Name</label>
//                     <input
//                         type='text'
//                         id='name'
//                         name='name'
//                         value={formData.name}
//                         onChange={handleChange}
//                         className='w-full p-2 border text-[2vh] border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
//                         placeholder='Your Name'
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='email' className='block text-lightModeText dark:text-darkModeText mb-1'>Email</label>
//                     <input
//                         type='email'
//                         id='email'
//                         name='email'
//                         value={formData.email}
//                         onChange={handleChange}
//                         className='w-full p-2 border text-[2vh] border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
//                         placeholder='Your Email'
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='message' className='block  text-lightModeText dark:text-darkModeText mb-1'>Message</label>
//                     <textarea
//                         id='message'
//                         name='message'
//                         value={formData.message}
//                         onChange={handleChange}
//                         className='w-full text-[2vh] p-2 border border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
//                         placeholder='Your Message'
//                         rows='4'
//                         required
//                     ></textarea>
//                 </div>
//                 <button
//                     type='submit'
//                     className='w-full py-2 bg-lightModeHeading dark:border-darkmodeSpan dark:bg-darkModeHeading text-lightModeBg dark:text-darkModeBg rounded-lg font-semibold'
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </div>
//         </>
        
//     );
// }

// export default Message;


import { useState } from 'react';
import ProfileNav from '../Profile/ProfileNav';
import { IoMdSend } from "react-icons/io";

function Message() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        fetch(
            "https://script.google.com/macros/s/AKfycbwCyfTA2btNCB7PTN6nuEmqIOpTttdmedwoYAEiHJrp1NkbGbytVUpgkHEObUCOBcZeiw/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
        .then((res) => res.json())
        .then((data) => {
            setIsSubmitting(false);
            setStatusMessage('Message sent successfully!');
            setTimeout(()=>{
                setStatusMessage('')
            }, 2000)
            setFormData({ name: '', email: '', message: '' }); // Clear form fields after submission
        })
        .catch((error) => {
            setIsSubmitting(false);
            setStatusMessage('Failed to send the message. Please try again.');
            setTimeout(()=>{
                setStatusMessage('')
            }, 2000)
            console.log(error);
        });
    };

    return (
        <>
            <ProfileNav />
            <div className='w-full max-w-md mx-auto p-4 bg-lightModeBg dark:bg-darkModeBg rounded-lg shadow-lg mt-10 border-[0.001rem] border-solid border-red-50'>
                <h2 className='text-lightModeHeading dark:text-darkModeHeading text-2xl flex items-center justify-start gap-2 font-bold mb-4 roboto-bold'>
                    <IoMdSend className='size-5 inline basic' />
                    <p className='inline basic bold'>Send me a message</p>
                </h2>
                {statusMessage && <p className='text-center basic dark:text-darkmodeSpan text-lightBlack'>{statusMessage}</p>}
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor='name' className='block text-lightModeText dark:text-darkModeText mb-1'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-2 border text-[2vh] border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
                            placeholder='Your Name'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-lightModeText dark:text-darkModeText mb-1'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-2 border text-[2vh] border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
                            placeholder='Your Email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='message' className='block text-lightModeText dark:text-darkModeText mb-1'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full text-[2vh] p-2 border border-lightModeHeading border-1 border-solid dark:border-darkmodeSpan rounded-lg bg-lightModeBg dark:bg-darkModeBg text-lightModeText dark:text-darkModeText'
                            placeholder='Your Message'
                            rows='4'
                            required
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className={`w-full py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-lightModeHeading'} dark:border-darkmodeSpan dark:bg-darkModeHeading text-lightModeBg dark:text-darkModeBg rounded-lg font-semibold`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Message;
