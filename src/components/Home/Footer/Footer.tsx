import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
                {/* Логотип и подпись */}
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-pulse">
                        7chyngyz
                    </h1>
                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Социальные ссылки */}
                <div className="flex space-x-4">
                    <Link href={"https://github.com/7chyngyz"}>
                        <p
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={24} />
                        </p>
                    </Link>
                    <Link href={""}>
                        <p
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </p>
                    </Link>
                    <Link href={""}>
                        <p
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaEnvelope size={24} />
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
