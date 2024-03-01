"use client"
import PaddingComponent from "@/components/padding.component";
import white_logo from "../../../../public/assets/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { loginSchema } from "../auth.validations";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const handleLogin = async (values) => {

        try {
            const result = await axios.post("https://job-search-back-end-application.onrender.com/api/v1/user/login", values);
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
                localStorage.setItem("userToken", result.data.token)
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
            email: "",
            password: ""
        },
        onSubmit: handleLogin,
        validationSchema: loginSchema
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
                            login To Superio Jobs...
                        </div>

                        <div className="mb-3 flex justify-between">
                            <label htmlFor="email" className="opacity-65">email</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="example@gmail.com" />

                        </div>
                        {
                            (formik.touched.email && formik.errors.email) && <div className="text-sx text-right text-red-800">{formik.errors.email}</div>
                        }


                        <div className="mb-3 flex justify-between">
                            <label htmlFor="password" className="opacity-65">password</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="border border-slate-600 px-1 text-blue-custom-2" placeholder="Example@#1234" />

                        </div>
                        {
                            (formik.touched.password && formik.errors.password) && <div className="text-sx text-right text-red-800">{formik.errors.password}</div>
                        }



                        <div className="text-sm mt-4 mb-2">
                            not have an account <Link href={"/register"} className="underline">register...</Link>
                        </div>
                        <button type="submit" className=" bg-blue-custom-2 w-full py-2 text-slate-200 ">
                            Login
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}