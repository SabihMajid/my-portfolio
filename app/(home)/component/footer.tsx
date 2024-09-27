// components/Footer.js
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="min-w-96 min-h-52 border-t mt-10 bg-black text-white py-9 justify-between text-center">
      <p>&copy; {new Date().getFullYear()} Sabih Majid!
        <Link href="https://github.com/SabihMajid" target='blank'>
         -sabhiirfan.
        </Link>
      </p>
      <ul className="flex flex-wrap justify-center mb-4 p-5">
        <li className="mx-2">
          <Link href="/">
            <h1>About</h1>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/">
            <h1>Contact</h1>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="https://www.linkedin.com/in/sabhi-irfan-63a9922b7/" target="_blank">
            Linkedin
          </Link>
        </li>
        <li className="mx-2">
          <Link href="https://github.com/SabihMajid" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;