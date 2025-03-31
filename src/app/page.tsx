"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function Home() {

    const router = useRouter();
    const [registration_number, setRegistration_number] = useState("");
    const [password, setPassword] = useState("");
    const [credentialMsg, setCredentialMsg] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [allFieldEmpty, setAllFieldEmpty] = useState(false);
    const [regFieldEmpty, setRegFieldEmpty] = useState(false);
    const [passFieldEmpty, setPassFieldEmpty] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const handleClose = () => {
        setCredentialMsg(false);
    }

    const handleCancel = () => {
        router.refresh();
    }

    const handleLogin = () => {

        if (registration_number == "20240039459") {
            if (password == "Swapno@99") {
                router.push('/nep/student/dashboard');
            }
        } else if (registration_number == "") {
            if (password == "") {
                if (regFieldEmpty == true) {
                    setRegFieldEmpty(false);
                }
                if (allFieldEmpty == true) {
                    setAllFieldEmpty(false)
                }
                if (passFieldEmpty == true) {
                    setPassFieldEmpty(false);
                }
                if (credentialMsg == true) {
                    setCredentialMsg(false)
                }
                setAllFieldEmpty(true);
            } else {
                if (allFieldEmpty == true) {
                    setAllFieldEmpty(false);
                }
                if (regFieldEmpty == true) {
                    setRegFieldEmpty(false)
                }
                if (passFieldEmpty == true) {
                    setAllFieldEmpty(false);
                }
                if (credentialMsg == true) {
                    setCredentialMsg(false)
                }
                setRegFieldEmpty(true);
            }
        } else if (password == "") {
            if (registration_number == "") {
                if (regFieldEmpty == true) {
                    setRegFieldEmpty(false);
                }
                if (passFieldEmpty == true) {
                    setPassFieldEmpty(false);
                }
                if (allFieldEmpty == true) {
                    setAllFieldEmpty(false);
                }
                if (credentialMsg == true) {
                    setCredentialMsg(false)
                }
                setAllFieldEmpty(true);
            } else {
                if (allFieldEmpty == true) {
                    setAllFieldEmpty(false);
                }
                if (regFieldEmpty == true) {
                    setRegFieldEmpty(false);
                }
                if (passFieldEmpty == true) {
                    setPassFieldEmpty(false);
                }
                if (credentialMsg == true) {
                    setCredentialMsg(false)
                }
                setPassFieldEmpty(true);
            }
        } else {
            if (allFieldEmpty == true) {
                setAllFieldEmpty(false);
            }
            if (regFieldEmpty == true) {
                setRegFieldEmpty(false);
            }
            if (passFieldEmpty == true) {
                setPassFieldEmpty(false);
            }
            if (credentialMsg == true) {
                setCredentialMsg(false)
            }
            setCredentialMsg(true);
        }
    }
    
    return (
        <div className="min-h-screen w-screen bg-[url(/registration_login.jpg)] overflow-x-hidden overflow-y-auto  flex justify-center items-center flex-col gap-12 p-4">
            <Image height={145} width={145} src={"/au-logo.jpg"} alt="logo" />
            <div className="rounded-lg h-[50%] w-[90%] sm:h-[60%] sm:w-[40%] bg-white flex justify-center items-center p-8 flex-col gap-10">
                <div className={`bg-[#dcf5e7] h-16 w-full rounded-lg flex justify-center items-center gap-2 p-2 ${credentialMsg ? `flex` : `hidden`}`}>
                    <ul className="text-red-500 list-disc w-[80%] text-sm">
                        <li>Registration number or password is incorrect.</li>
                    </ul>
                    <X size={25} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    color={isHovering ? `#000000` : `#8a8a8a`}
                    className="cursor-pointer text-right" 
                    onClick={handleClose}
                    />
                </div>
                <div className={`bg-[#dcf5e7] h-16 w-full rounded-lg flex justify-center items-center gap-2 p-2 ${allFieldEmpty ? `flex` : `hidden`}`}>
                    <ul className="text-red-500 list-disc w-[80%] text-sm">
                        <li>The registration no field is required.</li>
                        <li>The password field is required.</li>
                    </ul>
                    <X size={25} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    color={isHovering ? `#000000` : `#8a8a8a`}
                    className="cursor-pointer text-right" 
                    onClick={handleClose}
                    />
                </div>
                <div className={`bg-[#dcf5e7] h-16 w-full rounded-lg flex justify-center items-center gap-2 p-2 ${regFieldEmpty ? `flex` : `hidden`}`}>
                    <ul className="text-red-500 list-disc w-[80%] text-sm">
                        <li>The registration no field is required.</li>
                    </ul>
                    <X size={25} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    color={isHovering ? `#000000` : `#8a8a8a`}
                    className="cursor-pointer text-right" 
                    onClick={handleClose}
                    />
                </div>
                <div className={`bg-[#dcf5e7] h-16 w-full rounded-lg flex justify-center items-center gap-2 p-2 ${passFieldEmpty ? `flex` : `hidden`}`}>
                    <ul className="text-red-500 list-disc w-[80%] text-sm">
                        <li>The password field is required.</li>
                    </ul>
                    <X size={25} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    color={isHovering ? `#000000` : `#8a8a8a`}
                    className="cursor-pointer text-right" 
                    onClick={handleClose}
                    />
                </div>
                <h1 className="font-bold text-xl sm:text-2xl mb-6 text-center">Log In to your Account</h1>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="registration_number" className="text-sm font-bold text-left">Registration Number</label>
                    <input type="text" name="registration_number" id="reg_num" className="border border-black rounded-md p-1 outline-none bg-neutral-100" onChange={(e) => setRegistration_number(e.target.value)} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password" className="text-sm font-bold text-left">Password</label>
                        <Link href={"https://ausexamination.ac.in/nep/student/forgot-password"} className="text-[#7239ea] font-bold text-sm">Forget Password?</Link>
                    </div>
                    <input type="password" name="password" id="pass" className="border border-black rounded-md p-1 outline-none bg-neutral-100" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="rounded-lg bg-[#7239ea] p-3 w-20 h-10 text-center flex justify-center items-center text-sm text-white hover:bg-[#5014d0] cursor-pointer" onClick={handleLogin}>Log in</button>
                    <button className="rounded-lg bg-[#f1416c] p-3 w-20 h-10 text-center  flex justify-center items-center text-sm text-white hover:bg-[#d9214e] cursor-pointer" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
