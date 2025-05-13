import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-500 dark:text-green-400">Contact Me</h2>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
                <div className="flex flex-col items-center">
                    <p className="mb-4">Feel free to reach out to me via email or LinkedIn!</p>
                    <a
                        href="mailto:forte.meadows31@icloud.com"
                        className="text-blue-500 hover:text-green-400 font-bold mb-2"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anshul-rustogi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-green-400 font-bold"
                    >
                        LinkedIn Profile
                    </a>
                    <a
                        href="https://github.com/AnshulRustogi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-green-400 font-bold mt-2"
                    >
                        GitHub Profile
                    </a>
                </div>
                <div className="mt-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Anshul Rustogi. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
