"use client"

import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {DirectionAwareHover} from '../../../components/ui/direction-aware-hover'
import { RiNextjsFill } from 'react-icons/ri'
import { SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiHtml5, DiJavascript } from 'react-icons/di'

export default function Project() {

    const projects = [
        {
            tittle: "Investment Web frntend",
            tech: [RiNextjsFill,SiTailwindcss,SiShadcnui,SiTypescript],
            Link: "https://investiq-webapp.vercel.app/",
            cover: "/Firstimg.png",
            background: "bg-green-500"
        },
        
        {
            tittle: "Vechile Shop frntend",
            tech: [RiNextjsFill,SiTailwindcss,SiShadcnui,SiTypescript],
            Link: "https://react-website-lovat-five.vercel.app/",
            cover: "/Second1.png",
            background: "bg-indigo-500"
        },
        <div className='w-full space-y-5 cursor-pointer border',>
        {
            tittle: "Digital Clock",
            tech: [SiTypescript,SiTailwindcss,DiJavascript,DiHtml5],
            Link: "https://github.com/SabihMajid/Digital-Clock",
            
            cover: "/image2.png",
            background: "bg-yellow-500"
        }
        </div>
        {
            tittle: "Bank frntend",
            tech: [SiReact,SiTailwindcss,DiJavascript],
            Link: "https://github.com/SabihMajid/Nextjs-Website",
            cover: "/Secondimg.png",
            background: "bg-yellow-500"
        }
    ]


    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text='Projescts🛩️' className='flex flex-col items-center justify-center  -hue-rotate-30' />
            <div className='grid grid-cols-1 sm:grid-cols-2  pt-20 gap-5'>
                {projects.map((_project, _index) => {
                    return (<Link href={_project.Link} key={_index}>
                     <div className={cn("p-5 rounded-md",_project.background)}>
                        <DirectionAwareHover imageUrl={_project.cover} className='w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                            <h1 className='text-2xl font-bold'>{_project.tittle}</h1>
                            <div className='flex justify-center gap-5'>
                                {_project.tech.map((Icon,_index)=>{
                                    return (
                                        <Icon className='w-8 h-8' key={_index} />
                                    )
                                })}
                            </div>
                                </div>
                        </DirectionAwareHover>
                     </div>
                    </Link>)
                })}
            </div>
        </div>
    )
}
