import React from 'react';
import { experiences } from '../../../../Data/data';
import motionLogo from '../../../../public/images/motionweb_logo.jpg'
import antLogo from '../../../../public/images/antLogo.jpg'
import Image from 'next/image';

const Experience = () => {
    return (
        <section id='experience' className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-gray-300 mb-12">{experiences.title}</h2>
                <div className="space-y-8">
                    {/* Experience Item 1 */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
                        <div className="w-40 h-20 rounded-full flex items-center justify-center shadow-md">
                            <Image src={motionLogo} width={100} height={100} alt='logo' className='flex rounded-full' />
                        </div>
                        <div className="mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-100">{experiences.items[0].company1}</h3>
                            <p className="text-gray-400 text-lg">{experiences.items[0].position1}</p>
                            <p className="text-sm text-gray-500">{experiences.items[0].duration1}</p>
                            <p className="mt-4 text-gray-300">{experiences.items[0].description1}</p>
                        </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
                        <div className="w-40 h-20 rounded-full flex items-center justify-center shadow-md">
                            <Image src={antLogo} width={80} height={100} alt='logo' className='flex rounded-full' />
                        </div>
                        <div className="mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-100">{experiences.items[1].company2}</h3>
                            <p className="text-gray-400 text-lg">{experiences.items[1].position2}</p>
                            <p className="text-sm text-gray-500">{experiences.items[1].duration2}</p>
                            <p className="mt-4 text-gray-300">{experiences.items[1].description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
