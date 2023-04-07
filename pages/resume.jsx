import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import gfg from '../public/assets/skills/gfg.png';
import lt from '../public/assets/skills/leetcode.png';

import h from '../public/assets/skills/hackerrank.png';
import c from '../public/assets/skills/C.png';
const resume = () => {
  return (
    <>
      <Head>
        <title>Pranjwal | Resume</title>
        <meta
          name='description'
          content="I'm a  full stack developer"
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Pranjwal Gupta</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/pranjwal-gupta/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Pranjwalg'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
           <h6>I have a good understanding of Programming Language, web development tools handling the projects applications. Looking forward
to learning new things in this field. I want to work with an organization that can enhance my knowledge as well as my technical skills.</h6>
          </div>
        </div>
       

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full Stack  Developer
            <span className='px-2'>|</span> C
            <span className='px-2'>|</span> C++
            <span className='px-2'>|</span> Java
            <span className='px-2'>|</span> Servlet
            <span className='px-2'>|</span> Jsp
            <span className='px-2'>|</span> JDBC
            <span className='px-2'>|</span> Hibernate
            <span className='px-2'>|</span> Spring
            <span className='px-2'>|</span> Spring-JDBC
            <span className='px-2'>|</span> Spring-Orm
            <span className='px-2'>|</span> Spring-MVC
            <span className='px-2'>|</span> Spring boot
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React Js
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MY SQL
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> OOPs
            <span className='px-2'>|</span> Postman
         
          </p>
        
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        Education
        </h5>
      
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            B.Tech(2020-2023)
            </span></p>
           
           
          <p className='py-1 italic'>Noida Institute of Engineering & Technology (NIET) ,Greater Noida</p>
         
          
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Diploma(2017-2020)
            </span></p>
           
          <p className='py-1 italic'>Government Girls Polytechnic,Lucknow</p>
          
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
             X
            </span></p>
           
          <p className='py-1 italic'>Bhartiya Inter College,Pihani-Hardoi</p>
          
        </div>


      

        <h5 className='text-center underline text-[18px] py-4'>
        Certificate
        </h5>
      
        <div className='py-6'>
          <p className='bold'>
            <span className='font-bold '>
            Intermediate Object-Oriented Programming with Java
            </span></p>
           
          <p className='py-1 bold'>

          In this Course, I Will Be Learn Object-oriented programming with Java. We will learn and explore more advanced
topics of object-oriented programming with Java.
          </p>
          
        </div>

        <div className='py-6'>
          <p className='bold'>
            <span className='font-bold '>
            Introduction to Java Programming
            </span></p>
           
          <p className='py-1 bold'>
          I have learned in this course: * How to navigate and use the NetBeans IDE to create Java projects, packages and
programs. * How to declare and use Java Datatypes & Identifiers, work with Java Operators, work with Java Decision Making Constructs. * How to work with Java repetition/Looping Constructs, declare and use Java Arrays,as well as work with the java Exception Handling mechanism.
         
          </p>
          
        </div>


        <div className='py-6'>
          <p className='bold'>
            <span className='font-bold '>
               JavaScript-ES6
            </span></p>
           
          <p className='py-1 bold'>
          
          In this course, I ll learn and practice the most fundamental ES6 features with examples. and I Will start writing modern JavaScript and understand I need ES6. Mastering modern JavaScript starts with understanding the
reasoning behind the main ES6 features - arrow functions, variables, template literals, etc.
          </p>
          
        </div>

        <div className='py-6'>
          <p className='bold'>
            <span className='font-bold '>
            Introduction to Web Development with HTML, CSS, JavaScript
            </span></p>
           
          <p className='py-1 bold'>
          I have learned in this course: * In this course I learned the essential things of web development HTML, CSS, Javascript. and I also read version control system git and GitHub in it.
         
          </p>
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        ACHIEVEMENTS
        </h5>

        <div className='flex'>
            <a
              href='https://auth.geeksforgeeks.org/user/pranjwalgupta95063/'
              target='_blank'
              rel='noreferrer'
            >
      <div className='grid grid-cols-3 gap-3 justify-center items-center'>
                <Image src={gfg} width='24px' height='24px' alt='/' />
              </div>
            </a>

            <a
              href='https://leetcode.com/pranjwalgupta95063/'
              target='_blank'
              rel='noreferrer'
            >
            <div className='grid grid-cols-3 gap-3 justify-center items-center'>
                <Image src={lt} width='24px' height='24px' alt='/' />
              </div>
            </a>

            <a
              href='https://www.hackerrank.com/pranjwalgupta951'
              target='_blank'
              rel='noreferrer'
            >
      <div className='grid grid-cols-3 gap-3 justify-center items-center'>
                <Image src={h} width='24px' height='24px' alt='/' />
              </div>
            </a>


            <a
              href='https://drive.google.com/file/d/11Pcd2xP6QrUCL-BmJaK1N2hWu3GL9SnG/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
      <div className='grid grid-cols-4 gap-3 justify-center items-center'>
                <Image src={c} width='28px' height='28px' alt='/' />
              </div>
            </a>


          </div>
      </div>
    </>
  );
};

export default resume;
