import React from 'react'
import SideBar from '@/app/components/SideBar'
import Image from 'next/image'

const dashboard = () => {
    return (
        <div className='h-screen w-screen flex justify-end items-center bg-linear-90 from-[#3ab4b1] via-[#ffffff] to-[#cccccc] overflow-x-hidden'>
            <SideBar />
            <div className='w-[80%] h-full p-2'>
                <div className='px-20 py-4 flex justify-center items-start flex-col gap-2 w-full h-full'>
                    <div className='flex justify-between items-center gap-5 w-full'>
                        <h1 className='text-base'>Dashboard</h1>
                        <div className='flex justify-center items-center'>
                            <div className='p-5 font-bold text-sm bg-[#cbc3cf] h-12 flex justify-center items-center cursor-pointer hover:bg-green-800 text-white'>
                                Bachelor of sceince COMPUTER SCIENCE
                            </div>
                            <Image src={"/no-image.jpg"} alt='no-image' width={100} height={100} className='rounded-lg drop-shadow-2xl cursor-pointer' />
                        </div>
                    </div>
                    <div className='bg-white w-full h-full p-5'>
                        <div className='flex justify-between items-start'>
                            <h1 className='text-3xl text-red-800'><span className='font-bold'>WELCOME!! </span>SWAPNANEEL DUTTA</h1>
                            <div className='border border-amber-900 w-32 h-40 relative overflow-hidden'>
                                <Image src={"/profile_pic.jpeg"} alt='profile_pic' layout='fill' objectFit='cover' className='absolute' />
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-5 px-10'>
                            <div className='bg-radial from-white from-5% to-[#d9d962] p-5'>
                                <span>Batch</span>
                                <br />
                                <span>2024</span>
                            </div>
                            <div className='bg-radial from-white from-5% to-[#f1bec3] p-5'>
                                <span>Registration No.</span>
                                <br />
                                <span>20240039459</span>
                            </div>
                            <div className='bg-radial from-white from-5% to-[#fc924c] p-5'>
                                <span>Department</span>
                                <br />
                                <span>Computer Science</span>
                            </div>
                        </div>
                        <br />
                        <div className='flex justify-start items-center gap-5 px-10 pb-16'>
                            <div className='bg-radial from-white from-5% to-[#b0ccef] p-5'>
                                <span>Date of Birth</span>
                                <br />
                                <span>10-11-2025</span>
                            </div>
                            <div className='bg-radial from-white from-5% to-[#f1bec3] p-5'>
                                <span>Contact No.</span>
                                <br />
                                <span>6001410621</span>
                            </div>
                            <div className='bg-radial from-white from-5% to-[#b4eeae] p-5'>
                                <span>E-Mail</span>
                                <br />
                                <span>swapnaneeldutta56@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='flex justify-center items-center bg-white text-gray-400 w-full h-16 z-50'>
                    Assam University, Silchar
                </footer>
            </div>
        </div>
    )
}

export default dashboard
