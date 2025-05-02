/* 
Create a beautiful and creative contact me section for the portfolio website using React and Tailwind CSS.
Add the following features:
1. A title "Contact Me".
2. Email and linkedIn links.
3. A responsive design that looks good on both desktop and mobile devices.
4. Use Tailwind CSS for styling and animations.
*/

import React from 'react';

const Contact = () => {
    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
                <div className="flex flex-col items-center">
                    <p className="mb-4">Feel free to reach out to me via email or LinkedIn!</p>
                    <a
                        href="mailto:example@example.com"
                        className="text-blue-500 hover:text-blue-400 font-bold mb-2"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 font-bold"
                    >
                        LinkedIn Profile
                    </a>
                </div>
                <div className="mt-8">
                    {/* <p className="text-center text-gray-400">© 2023 Anshul Rustogi. All rights reserved.</p> */}
                    {/* Get year from current date */}
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Anshul Rustogi. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;