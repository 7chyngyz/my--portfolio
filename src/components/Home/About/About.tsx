import React, { FC } from "react";
import SectionHeading from "@/components/helper/SectionHeading";
import { aboutInfo, BaseInfo } from "../../../../Data/data";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import Image from "next/image";

const About: FC = () => {
  return (
    <section id="about" className="pt-16 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-600">{aboutInfo.description}</p>
          <p className="mt-4 text-base text-gray-600">{aboutInfo.description2}</p>
          <p className="mt-4 text-base text-gray-600">{aboutInfo.skills}</p>
          <div className="mt-8">
            <div className="flex justify-between items-center space-x-2 mb-6 max-w-[400px]">
              <div className="flex flex-col gap-5">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
                    <DiJavascript1 className="text-black" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    JavaScript
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center">
                    <FaReact className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    React JS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <SiRedux className="text-blue-950" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    RTK Query
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <SiSwagger className="text-green-500" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    Swagger
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <TbBrandTypescript className="text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    TypeScript
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <RiNextjsLine />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    Next JS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <FaNodeJs className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    Node JS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <SiPrisma className="text-blue-950" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    Prisma ORM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
          <Image
            src={BaseInfo.profilePic}
            alt={BaseInfo.name}
            width={350}
            height={350}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
