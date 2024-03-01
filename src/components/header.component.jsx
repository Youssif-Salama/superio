"use client"
import Image from "next/image";
import white_logo from "../../public/assets/images/logo-white.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { href: "/", name: "home" },
    { href: "/find-jobs", name: "find Jobs" },
    { href: "/employers", name: "employers" },
]
export const HeaderComponent = () => {
    let counter = 0;
    const onClickBars = () => {

        const mobList = document.querySelector(".mob_list");
        if (counter === 0) {
            mobList.classList.remove("hidden");
            counter = 1;
        } else {
            mobList.classList.add("hidden");
            counter = 0;
        }
    }
    const [userToken, setUserToken] = useState();
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        setUserToken(localStorage.getItem("userToken"));
        window.addEventListener("scroll", () => { (window.scrollY > 50) ? setIsScrolled(true) : setIsScrolled(false); })
    }, [])

    const path = usePathname();
    return (
        <div className={`header flex items-center justify-between p-4 fixed w-full m-0 top-0  
        ${(isScrolled || path != "/") && "border-b-2 border-slate-200 bg-opacity-75 bg-blue-custom shadow-lg backdrop-blur-md"}`}>
            <div className="logo">
                <Image src={white_logo} alt="logo-white.png" />
            </div>
            <nav className="flex items-center justify-between max-sm:hidden">
                <ul className="flex items-center mx-8">
                    {
                        links.map(link => {
                            const isActive = path === link.href;
                            return <li key={link.name}
                                className={`text-slate-200 mx-2 ${isActive && !isScrolled ? " border-b-2 border-blue-custom" : ""} ${isScrolled && isActive ? "text-blue-custom-2 border-b-2 border-blue-custom-2" : ""}`}>

                                <Link Link href={link.href} className="capitalize">{link.name}</Link>
                            </li>
                        })
                    }
                </ul>
                <div className="header_btn">
                    {!userToken ? <button type="button" className=" ease-in-out duration-300 capitalize mx-4 text-slate-200 outline-none border border-blue-custom px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-custom">
                        <Link href={"/register"}>register/login</Link>
                    </button>
                        : <button type="button" className=" ease-in-out duration-300 capitalize mx-4 text-slate-200 outline-none border border-blue-custom px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-custom">
                            <i className="fa-solid fa-user"></i>
                        </button>}
                    <button type="button" className="capitalize mx-4 text-blue-custom bg-slate-200 outline-none border border-blue-custom px-4 py-2 rounded-full">add job</button>
                </div>
            </nav>
            <div className="mob_nav text-slate-200 lg:hidden md:hidden">
                <nav>
                    <i className="fa-solid fa-bars relative bars_header" onClick={onClickBars}></i>


                    <div className="absolute right-0 pt-2 bg-blue-custom-2 mob_list hidden">
                        <ul className="">
                            {
                                links.map(link => {
                                    const isActive = path === link.href;
                                    return <li key={link.name}
                                        className={`text-slate-200 mx-2 ${isActive && !isScrolled ? " border-b-2 border-blue-custom" : ""} ${isScrolled && isActive ? "text-blue-custom-2 border-b-2 border-blue-custom-2" : ""}`}>

                                        <Link Link href={link.href} className="capitalize">{link.name}</Link>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="header_btn bg-slate-200 text-blue-custom-2 mt-2">
                            {!userToken ? <button type="button" className="border-blue-custom border p-1 m-2 hover:text-slate-200 hover:bg-blue-custom-2 ease-linear duration-300">
                                <Link href={"/register"}>register/login</Link>
                            </button>
                                : <button type="button" className="border-blue-custom border p-1 m-2">
                                    <i className="fa-solid fa-user"></i>
                                </button>}
                            <button type="button" className="border-blue-custom border p-1 m-2 hover:text-slate-200 hover:bg-blue-custom-2 ease-linear duration-300" >add job</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    );
}