import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Navbar = ({className}:{className?:string}) => {
  const social = [
    {
      Link: 'https://www.linkedin.com/in/hiba-zaheer-63a9922b7/',
      Label: "Linkedin",
      Icon: Linkedin,
    },
    {
      Link: "https://github.com/hibazaheermeo",
      Label: "Github",
      Icon: Github,

    },
    {
      Link: "https://twitter.com/home",
      Label: "Twitter",
      Icon: Twitter,

    }
  ]
  return (

    <nav className={cn('py-10 flex justify-between items-center animate-move-down',
      className=""
  )}>
      <h1 className='text-2xl font-medium underline rotate-0'>hibazaheer👩‍💼</h1>
      <div className='flex items-center gap-4'>
        {social.map((social, index) => {
          const Icon = social.Icon;
          return <Link href={social.Link} key={index} aria-label={social.Label}>
            <Icon  className='w-5 hover:scale-125 transition-all '/>
          </Link>
        })}
      </div>
    </nav>
  )
}

export default Navbar;