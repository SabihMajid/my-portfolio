import Image from 'next/image'; // Adjust the path as needed
import Images from './img1.jpg';
import Title from './Title';
import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div>

    <section className="relative flex flex-col items-center p-8 py-10 sm:p-0 bg-black text-white">
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold ">
        <Title text='About!' className='flex flex-col px-10 items-center justify-center  -hue-rotate-30' />
            </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
          <Image 
            src={Images} 
            alt="Sabih meo" 
            className="rounded-lg shadow-lg"
            width={400} 
            height={400} 
            objectFit="cover"
            />
        </div>
        <div className="md:w-1/2 w-full md:pl-8">
          <h2 className="text-4xl font-bold mb-4">Hi there! I am Sabih Majid</h2>
          <p className="text-xl mb-4">
            I am a skilled Front-End Developer specializing in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Node.js, and React (Next.js). I am passionate about creating innovative, user-friendly web applications that exceed client expectations.
          </p>
          <p className="text-xl mb-4">
            My commitment to excellence and problem-solving ability, combined with strong communication skills and attention to detail, ensure high-performance solutions. I thrive in collaborative environments and am dedicated to delivering top-tier digital experiences.
          </p>
          <p className="text-xl mb-4">
            When not coding, I enjoy watching movies, recharging with a good nights sleep, reflecting on my experiences through journaling, or expanding my skillset with new learnings. I am always on the lookout for creative projects that spark excitement and contribute to my teams success.
          </p>
          <p className="text-xl mb-4">
            If you have a project or opportunity you would like to discuss, I am all ears! Lets work together to transform your vision into a reality that wows your users and gives your business a competitive edge. Reach out to discuss your project or opportunity. I look forward to creating something amazing together!
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
