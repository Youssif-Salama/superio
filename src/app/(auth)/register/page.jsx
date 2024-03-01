"use client"
import PaddingComponent from "@/components/padding.component";
import white_logo from "../../../../public/assets/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { signupSchema } from "../auth.validations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Register() {
    const router = useRouter();
    const handleRegister = async (values) => {
        const { year, month, day, skills, ...rest } = values;
        const updatedSkills = skills.split(",");
        const DateOB = `${year}-${month}-${day}`;
        const updatedValues = { ...rest, DateOB, skills: updatedSkills };
        try {
            const result = await axios.post("https://job-search-back-end-application.onrender.com/api/v1/user/signup", updatedValues);
            console.log(result);
            if (!result) {
                toast.error(`Error in server`, {
                    style: {
                        border: '1px solid #122C91',
                        padding: '16px',
                        color: '#122C91',
                    },
                    iconTheme: {
                        primary: '#122C91',
                        secondary: '#FFFAEE',
                    },
                });
            } else {
                toast.success(`${result.data.message}`, {
                    style: {
                        border: '1px solid #122C91',
                        padding: '16px',
                        color: '#122C91',
                    },
                    iconTheme: {
                        primary: '#122C91',
                        secondary: '#FFFAEE',
                    },
                });
                router.push("/login")
            }
        } catch (error) {
            toast.error(`${error.response.data.message || error.response.data.error}`, {
                style: {
                    border: '1px solid #122C91',
                    padding: '16px',
                    color: '#122C91',
                },
                iconTheme: {
                    primary: '#122C91',
                    secondary: '#FFFAEE',
                },
            });
        }

    }
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            address: "optional",
            skills: "optional",
            role: "",
            year: "",
            month: "",
            day: ""
        },
        onSubmit: handleRegister,
        validationSchema: signupSchema
    })
    return (
        <div className="min-h-screen">
            <PaddingComponent />
            <div className="p-4">
                <div className="book border-2 border-blue-custom-2 rounded overflow-hidden lg:w-1/3 mx-auto mt-5 max-sm:w-full md:w-3/4">
                    <div className="left_page bg-blue-custom-2 flex items-center justify-center py-4">
                        <Image src={white_logo} alt="logo_img_book" />
                    </div>
                    <form className="right_page m-4" onSubmit={formik.handleSubmit}>
                        <div className="title opacity-80 text-sm mb-3">
                            Register To Superio Jobs...
                        </div>
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="firstName" className="opacity-65">first Name</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} type="text" name="firstName" id="firstName" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="youssif" />

                        </div>
                        {
                            (formik.touched.firstName && formik.errors.firstName) && <div className="text-sx text-right text-red-800">{formik.errors.firstName}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="lastName" className="opacity-65">last Name</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} type="text" name="lastName" id="lastName" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="salama" />

                        </div>
                        {
                            (formik.touched.lastName && formik.errors.lastName) && <div className="text-sx text-right text-red-800">{formik.errors.lastName}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="email" className="opacity-65">email</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="example@gmail.com" />

                        </div>
                        {
                            (formik.touched.email && formik.errors.email) && <div className="text-sx text-right text-red-800">{formik.errors.email}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="phone" className="opacity-65">phone</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name="phone" id="phone" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="+201556543218" />

                        </div>
                        {
                            (formik.touched.phone && formik.errors.phone) && <div className="text-sx text-right text-red-800">{formik.errors.phone}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="role" className="opacity-65">role</label>
                            <select name="role" id="role" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.role} >
                                <option value="USER">user</option>
                                <option value="COMPANY_HR">company hr</option>
                            </select>

                        </div>
                        {
                            (formik.touched.role && formik.errors.role) && <div className="text-sx text-right text-red-800">{formik.errors.role}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="password" className="opacity-65">password</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="Example@#1234" />

                        </div>
                        {
                            (formik.touched.password && formik.errors.password) && <div className="text-sx text-right text-red-800">{formik.errors.password}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="address" className="opacity-65">address</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} type="text" name="address" id="address" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="write , between words" />

                        </div>
                        {
                            (formik.touched.address && formik.errors.address) && <div className="text-sx text-right text-red-800">{formik.errors.address}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="skills" className="opacity-65">skills</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skills} placeholder="write , between words" type="text" name="skills" id="skills" className="border border-slate-600 px-1 text-blue-custom-2" />

                        </div>
                        {
                            (formik.touched.skills && formik.errors.skills) && <div className="text-sx text-right text-red-800">{formik.errors.skills}</div>
                        }
                        <div className="mb-3 flex justify-between">
                            <label htmlFor="DateOB" className="opacity-65">date of birth</label>
                            <div id="DateOB" name="DateOB">
                                <select name="year" id="year" className="mx-1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.year}>
                                    <option value="">year</option>
                                    {(() => {
                                        const options = [];
                                        for (let i = 1960; i <= 2010; i++) {
                                            options.push(<option key={i} value={i}>{i}</option>);
                                        }
                                        return options;
                                    })()}
                                </select>
                                <select name="month" id="month" className="mx-1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.month}>
                                    <option value="">month</option>
                                    {(() => {
                                        const options = [];
                                        for (let index = 1; index <= 12; index++) {
                                            options.push(<option value={index} key={index}>{index}</option>)
                                        }
                                        return options;
                                    })()}
                                </select>
                                <select name="day" id="day" className="mx-1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.day}>
                                    <option value="">day</option>
                                    {(() => {
                                        const options = [];
                                        for (let index = 1; index <= 30; index++) {
                                            options.push(<option value={index} key={index}>{index}</option>)
                                        }
                                        return options;
                                    })()}
                                </select>
                            </div>

                        </div>
                        {
                            (formik.touched.DateOB && formik.errors.DateOB) && <div className="text-sx text-right text-red-800">{formik.errors.DateOB}</div>
                        }
                        <div className="text-sm mt-4 mb-2">
                            alread have an account <Link href={"/login"} className="underline">login...</Link>
                        </div>
                        <button type="submit" className=" bg-blue-custom-2 w-full py-2 text-slate-200 ">
                            Register
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}