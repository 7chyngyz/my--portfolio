import React from "react";
import { projects } from "../../../../Data/data"; // предполагаем, что данные проектов будут импортироваться

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-gray-300 mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <div className="relative">
                                <img
                                    src={project.image1}
                                    alt={project.title1}
                                    className="w-full h-48 object-cover rounded-lg mb-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-bold">
                                    {project.type1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-100 mb-4">{project.title1}</h3>
                            <p className="text-gray-400 mb-4">{project.description1}</p>
                            <div className="flex justify-between items-center">
                                <a
                                    href={project.github1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-400"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.link1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-400 cursor-pointer"
                                >
                                    Go Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
