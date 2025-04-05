"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Gauge } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='w-[20%] h-full fixed left-0 top-0 flex justify-center items-center flex-col bg-[#efe9eb] overflow-x-hidden'>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <Image src={"/au-logo.jpg"} height={100} width={100} alt='logo' />
            </div>
            <div className="links p-5 h-[80%] w-full flex justify-start items-start flex-col gap-5 text-xs">
                <div className={`flex justify-start items-center gap-2 w-30 ${active ? `text-blue-700` : `text-black`}`}>
                    <Gauge size={15} color='#009ef7' />
                    <Link href={"/nep/student/dashboard"} className=''>Dashboards</Link>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24l88 0c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288 208 288l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112zm48 88l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 64z" /></svg>
                    <span className='ml-0.5'>Registration</span>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24l88 0c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288 208 288l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112zm48 88l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 64z" /></svg>
                    <span className='ml-0.5'>Academics</span>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512"><path fill="#B197FC" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" /></svg>
                    <span className=''>Examination</span>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24l88 0c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288 208 288l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112zm48 88l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 64z" /></svg>
                    <span className='ml-0.5'>My Applications</span>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#B197FC" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                    <span className='ml-1'>Update ABC ID</span>
                </div>
                <div className={`flex justify-start items-center gap-2 ${active ? `text-blue-700` : `text-black`} ml-8`}>
                    <Link href={"/"}>Sign Out</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar
