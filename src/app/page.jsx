'use client'

import "./global.css"
// import Link from "next/link"
import Head from "next/head"
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Image from "next/image";
import img from "./../img/signup-image.jpg"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from "next/navigation";
// import Router from "next/router";
// import { data } from "autoprefixer";
// import Za from "./props/page"



const Page = () => {
    const schema = yup.object().shape({
        name: yup.string().required().matches(/[^\s]$/ , ('Please fill in without space ')),
        email: yup.string().required(),
        password: yup.string().required().min(8).max(15).matches(/[a-z]/,'Please use English lowercase letters').matches(/[A-Z]/,'Please use English Uppercase letters').matches(/[0-9]/,'Please use numbers'),
        conpass: yup.string().oneOf([yup.ref("password")],'It does not match').required(),
        check : yup.boolean().oneOf([true] , 'Please accept this field')

    })
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onsubmitform = (set) => {
        // console.log(router);
        // console.log(set);
        // console.log(register);
        router.push('/login/' + set.name + '/' + set.email + '/' + set.password + '/' + set.conpass + '/');

    }




    return (

        <div className="bg-[#F8F8F8] font-popins ">

            <div className="container mx-auto">
                <div className="w-full min-h-screen flex justify-center items-center">
                    <div className=" bg-white lg:rounded-2xl flex flex-wrap shadow-xl w-[100%] h-[100%] lg:w-[70%]">
                        <div className="p-10 lg:p-20 lg:w-1/2 w-full">
                            <h1 className=" text-5xl  py-10 font-popins4 capitalize">sign up</h1>
                            <div className=" py-2 ">
                                <form action="" method="get" onSubmit={handleSubmit(onsubmitform)} >
                                    <div className=" border-b my-5  border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <BsPersonFill className="text-2xl  me-3"> </BsPersonFill>
                                        </label>
                                        <input type="text" id="user" className="h-[100%]  w-full p-3 outline-none  placeholder:capitalize placeholder:text-xl  " placeholder="your name without space(English)" {...register("name")}
                                        />
                                        <br />


                                    </div>
                                    {errors.name && <div className="w-full ">
                                        <p className="text-x4s text-red-500">{errors.name?.message}</p>
                                    </div>}
                                    <div className=" border-b my-5 border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <HiOutlineMail className="text-2xl  me-3"> </HiOutlineMail>
                                        </label>
                                        <input type="email" id="user" className="h-[100%]   w-full p-3 outline-none  placeholder:capitalize  " placeholder="your email"   {...register("email")} />
                                        <br />
                                    </div>
                                    {errors.email && <div className="w-full ">
                                        <p className="text-x4s text-red-500">{errors.email?.message}</p>
                                    </div>}
                                    <div className=" border-b my-5 border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <FaLock className="text-2xl  me-3"> </FaLock>
                                        </label>
                                        <input type="password" id="user" className="h-[100%]   w-full p-3 outline-none  placeholder:capitalize  " placeholder="your password"  {...register("password")} />
                                        <br />
                                    </div>
                                    {errors.password && <div className="w-full ">
                                        <p className="text-x4s text-red-500">{errors.password?.message}</p>
                                    </div>}
                                    <div className=" border-b my-5 border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <CiLock className="text-2xl  me-3"> </CiLock>
                                        </label>
                                        <input type="password" id="user" className="h-[100%]   w-full p-3 outline-none  placeholder:capitalize  " placeholder="confirm your password"   {...register("conpass")} />
                                        <br />
                                    </div>
                                    {errors.conpass && <div className="w-full ">
                                        <p className="text-x4s text-red-500">{errors.conpass?.message}</p>
                                    </div>}
                                    <div className="flex my-3">
                                        <input type="checkbox" id="check2" className="lg:w-8  text-white accent-white   " {...register("check")} />
                                        <label htmlFor="check2">
                                            <p className="  font-popins text-x5s ms-2">I agree all statements in <Link href="" className="underline"> Terms of service</Link></p>
                                        </label>
                                    </div>
                                    {errors.check && <div className="w-full ">
                                        <p className="text-x4s text-red-500">{errors.check?.message}</p>
                                    </div>}

                                    <button className="px-9 mt-4 rounded-md font-popins mb-5 py-3 text-lg text-white hover:bg-[#4292DC] bg-[#4292ff]" >
                                        Register
                                    </button>



                                </form>

                            </div>

                            <div>

                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex-wrap  flex items-center justify-center">
                            <figure className="hidden lg:flex w-[60%]">
                                <Image src={img} className="w-full" >

                                </Image>
                            </figure>
                            
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}















export default Page
