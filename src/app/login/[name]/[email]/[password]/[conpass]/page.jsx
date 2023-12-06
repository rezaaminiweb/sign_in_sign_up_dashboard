'use client'
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useParams } from "next/navigation";
import Image from "next/image";
import img from "./../../../../../../img/signin-image.jpg"
import Link from "next/link";
import "./../../../../../global.css"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


export default function Reza() {
    const router2 = useRouter()
    const router = useParams()
    console.log(router);
    const { register, handleSubmit, watch } = useForm()
    const onFormSubmit = (data) => {
        if(data.name == router.name && data.password == router.password){
            console.log('s');
            router2.push('/dashboard/'+data.name+'')

        }

        console.log(data);
        console.log();
    }
    function Asp() {
        if (watch("name") == '') {
            return (
                <div>

                </div>
            )

        }
        if (watch("name") == null) {
            return (
                <div>

                </div>
            )

        }
        else if (watch("name") == router.name) {
            return (
                <div>
                    <p className="text-green-500"> The username is correct</p>
                </div>
            )
        }
        else if (watch("name") != router.name) {
            return (
                <div>
                    <p className="text-red-500">
                        username is wrong or not registered</p>
                </div>
            )
        }



    }
    function Aps2() {
        if (watch("password") == '') {
            return (
                <div></div>
            )

        }
        if (watch("password") == null) {
            return (
                <div></div>
            )

        }
        if (watch("password") != router.password) {
            return (

                <div>
                    <p className="text-red-500">
                        password is wrong or not registered</p>
                </div>
            )

        }
        if (watch("password") == router.password) {
            return (
                <div>
                    <p className="text-green-500"> The Password is correct</p>
                </div>

            )
        }
    }

    return (
        <div className="bg-[#F8F8F8] font-popins ">

            <div className="container mx-auto">
                <div className="w-full  flex justify-center items-center">
                    <div className=" bg-white lg:rounded-2xl flex flex-wrap shadow-xl w-[100%] min-h-screen lg:w-[70%]">
                        <div className="lg:w-1/2 w-full flex-wrap  flex items-center justify-center">
                            <figure className="hidden lg:flex w-[60%]">
                                <Image src={img} className="w-full" >

                                </Image>
                            </figure>

                        </div>
                        <div className="p-10 lg:p-20 lg:w-1/2 w-full">
                            <h1 className=" text-5xl font-popins py-10 font-popins4 capitalize">log in </h1>
                            <div className=" py-2 ">
                                <form action="" method="get" onSubmit={handleSubmit(onFormSubmit)} >
                                    <div className=" border-b my-5  border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <BsPersonFill className="text-2xl  me-3"> </BsPersonFill>
                                        </label>
                                        <input type="text" id="user" className="h-[100%] capitalize  w-full p-3 outline-none  placeholder:capitalize  " placeholder="your name" {...register('name')}
                                        />
                                        <br />
                                    </div>
                                    <Asp />


                                    <div className=" border-b my-5 border-slate-300 duration-300  focus-within:border-black  flex justify-start items-center" >
                                        <label htmlFor="user" className="">
                                            <FaLock className="text-2xl  me-3"> </FaLock>
                                        </label>
                                        <input type="password" id="user" className="h-[100%]   w-full p-3 outline-none  placeholder:capitalize  " placeholder="your password" {...register('password')} />
                                        <br />
                                    </div>
                                    <Aps2 />



                                    <button className="px-9 mt-3 rounded-md font-popins mb-5 py-3 text-lg text-white hover:bg-[#4292DC] bg-[#4292ff]" >
                                        login
                                    </button>



                                </form>

                            </div>

                            <div>

                            </div>
                            <div className=" py-5">
                                <h1 className="w-[50%]  "><Link href="./../../../.." className="capitalize underline text-x5s "> become member</Link></h1>

                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

