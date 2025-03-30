import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen w-screen bg-[url(/registration_login.jpg)] overflow-x-hidden overflow-y-auto  flex justify-center items-center flex-col gap-12 p-4">
            <Image height={145} width={145} src={"/au-logo.jpg"} alt="logo" />
            <div className="rounded-lg h-[60%] w-[40%] bg-white flex justify-center items-center p-8 flex-col gap-10">
                <h1 className="font-bold text-2xl mb-6">Log In to your Account</h1>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="registration_number" className="text-sm font-bold text-left">Registration Number</label>
                    <input type="text" name="registration_number" id="reg_num" className="border border-black rounded-md p-1 outline-none bg-neutral-100" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="registration_number" className="text-sm font-bold text-left">Password</label>
                        <Link href={"https://ausexamination.ac.in/nep/student/forgot-password"} className="text-[#7239ea] font-bold text-sm">Forget Password?</Link>
                    </div>
                    <input type="text" name="registration_number" id="reg_num" className="border border-black rounded-md p-1 outline-none bg-neutral-100" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="rounded-lg bg-[#7239ea] p-3 w-20 h-10 text-center flex justify-center items-center text-sm text-white hover:bg-[#5014d0] cursor-pointer">Log in</button>
                    <button className="rounded-lg bg-[#f1416c] p-3 w-20 h-10 text-center  flex justify-center items-center text-sm text-white hover:bg-[#d9214e] cursor-pointer">Cancel</button>
                </div>
            </div>
        </div>
    );
}
