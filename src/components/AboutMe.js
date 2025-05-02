import React from "react"; 

export default function AboutMe() {
    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8">
                        {/* <p>Anshul Rustogi</p> */}
                        {/* Make the above name subtly highlight, and name color as red to make it stand out */}
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Anshul Rustogi</h2>
                        <p className="text-gray-300">
                            I am a passionate software engineer with a strong background in web development and a keen interest in machine learning. I enjoy solving complex problems and building efficient, scalable applications. My goal is to leverage technology to create innovative solutions that make a positive impact on people's lives.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="https://placehold.co/600x600/EEE/31343C"
                            alt="Anshul Rustogi"
                            className="rounded-full w-48 h-48 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

