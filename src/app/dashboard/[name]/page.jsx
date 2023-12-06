'use client'
import "./../../global.css"
import { SiCivicrm } from "react-icons/si";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import img from "./../../../img/3106921.png"
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiMail } from "react-icons/ti";
import { FaLock } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaCaretUp } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "./../../../img/avatar-3.jpg"
import { TbPointFilled } from "react-icons/tb";
import img2 from "./../../../img/avatar-2.jpg"
import img3 from "./../../../img/avatar-4.jpg"
import { AiOutlineClose } from "react-icons/ai";
import img4 from "./../../../img/logo.png"
import { FiToggleLeft } from "react-icons/fi";
import { FiToggleRight } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { LuLayout } from "react-icons/lu";
import "./scroll.css"
import { FaAngleRight } from "react-icons/fa";
import { PiListFill } from "react-icons/pi";
import { IoAppsSharp } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { IoFlashSharp } from "react-icons/io5";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaIcons } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { LiaWpforms } from "react-icons/lia";
import { SiInformatica } from "react-icons/si";
import { TbTableShare } from "react-icons/tb";
import { MdDataset } from "react-icons/md";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { CiHashtag } from "react-icons/ci";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { HiHome } from "react-icons/hi2";
import { LuHome } from "react-icons/lu";
import img5 from "./../../../img/svg0.png"
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoHandRightSharp } from "react-icons/io5";
import img6 from "./../../../img/Capture.PNG"
import { FaAngleLeft } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import { useParams } from "next/navigation";






























export default function Dash() {
    const router = useParams()
    const [clickico1, setclickico1] = useState(false)
    const [clickmenu, setclickmenu] = useState(false)
    const [clickico2, setclickico2] = useState(false)
    const [clickico3, setclickico3] = useState(false)
    const [clickico4, setclickico4] = useState(false)
    const [clickico5, setclickico5] = useState(false)

    function reza(e) {
        if (clickmenu) {
            setclickmenu(false)
        }
        if (clickico2) {
            setclickico2(false)
        }
    }
    const myref = useRef()

    function clikfunc() {

        if (!clickico3) {
            myref.current.style.width = 0
        } else {


            myref.current.style.width = 20 + '%'

        };
    }
    function sdcard(e) {
        console.log(e.target.style.transform = 'translateX(-300px)');
        e.target.nextElementSibling.style.right = '0%'
    }
    function sdcard1(e) {
        e.target.parentElement.style.right = '-100%'
        console.log(e.target.parentElement.parentElement.childNodes[0].style.transform = 'translateX(0px)');
    }
    return (
        <div className="bg-[#F2F7FB] relative  w-full  " onClick={(event) => (reza(event))}>
            <span className={clickico4 ? "absolute z-30 lg:hidden w-full h-[100%] bg-[#00000066] opacity-100 visible duration-700" : "duration-700 absolute lg:hidden w-full h-[100%] invisible opacity-0 bg-[#00000000]"}>

            </span>
            <div className=" ">
                <div className="w-full">
                    <div className="flex ">
                        <div id="scrollhoy" className=" lg:w-[20%] fixed hidden lg:block bg-[#263544]   overflow-x-hidden overflow-y-scroll duration-300 h-screen  " ref={myref}>
                            <Aps />
                        </div>
                        <div className={clickico3 ? " hidden px-5 lg:block w-full h-fit  duration-700  " : " px-5  duration-700 h-fit hidden lg:block translate-x-[25%]   w-[80%] "}>
                            <div className="flex justify-between px-3 items-center  mt-28 w-full ">
                                <div className="flex items-center">
                                    <div className="bg-[#4099FF] rounded-md px-2 py-2 shadow-lg mx-3">
                                        <LuHome className="text-2xl text-white  " />
                                    </div>
                                    <div >
                                        <h2 className="font-popins2">Dashboard</h2>
                                        <p className="font-thin">lorem ipsum dolor sit amet, consectetur adipisicing elits</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex items-center text-sm">
                                        <a href="#" className="hover:text-[#40B2FD] duration-300">
                                            <LuHome className="text-lg   " />
                                        </a>
                                        <span className="mx-3">/</span>
                                        <a href="#" className="hover:text-[#40B2FD] duration-300">
                                            <span>Dashboard</span>

                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full flex mt-9 ">
                                <div className="w-[65%] rounded-lg shadow-lg flex-wrap bg-white flex justify-center py-3" >
                                    <div className="w-full ps-8 py-3">
                                        <p className="font-popins">Deals Analytics</p>
                                        <hr className="w-28 mt-3 bg-black" />
                                    </div>
                                    <figure className="">
                                        <Image src={img5} />
                                    </figure>

                                </div>
                                <div className="w-[35%] ps-5">
                                    <div className="flex shadow-lg justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Impressions</p>
                                            <p className="text-[#4099FF] py-2 text-3xl font-popins">1,563</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#4099FF] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <FaEye className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex shadow-lg mt-3 justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Goal</p>
                                            <p className="text-[#2ED8B6] py-2 text-3xl font-popins">30,564</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#2ED8B6] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <GoGoal className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex shadow-lg mt-3 justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Impact</p>
                                            <p className="text-[#FEB54D] py-2 text-3xl font-popins">42.6%</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#FEB54D] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <IoHandRightSharp className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                            <br /><br />
                            <div className="w-full rounded-lg  bg-white shadow-lg">

                                <div className=" flex flex-wrap">
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Published Project</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">532</span>
                                            <span className="text-[#2ED8B6] font-popins">+1.69%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[30%] h-[100%] flex bg-[#FF5370] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[27%] translate-y-[-25%]  bg-white border-2 border-[#FF5370] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Completed Task</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">4,569</span>
                                            <span className="text-[#FF5370] font-popins">-0.5%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[60%] h-[100%] flex bg-[#4099FF] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[57%] translate-y-[-25%]  bg-white border-2 border-[#4099FF] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Successfull Task</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">89%</span>
                                            <span className="text-[#2ED8B6] font-popins">+0.99%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[80%] h-[100%] flex bg-[#2ED8B6] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[77%] translate-y-[-25%]  bg-white border-2 border-[#2ED8B6] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Ongoing Project</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">365</span>
                                            <span className="text-[#2ED8B6] font-popins">+0.35%</span>
                                        </li>
                                        <li className=" mt-5 py-2">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[50%] h-[100%] flex bg-[#FFB64D] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[47%] translate-y-[-25%]  bg-white border-2 border-[#FFB64D] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <br /><br />
                            <div className=" w-full flex ">
                                <div className="w-[33%]">
                                    <figure className="px-2 py-3 h-[320px] rounded-md bg-[#4099FF]">
                                        <Image src={img6} />
                                    </figure>
                                </div>
                                <div className="bg-white w-[33%] h-[320px] overflow-hidden rounded-md px-5 py-3 shadow-lg mx-5">
                                    <div className="flex justify-between">
                                        <div className="font-popins">
                                            <p className="my-3">whats new</p>
                                            <hr />
                                        </div>
                                        <div className="flex relative  overflow-hidden w-[30%] justify-end   items-center" >
                                            <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer  overflow-visible translate-x-0 duration-300" />
                                            <div className="absolute flex  right-[-100%] duration-300 ">
                                                <FaRecycle />
                                                <GoDash className="mx-2" />
                                                <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                            </div>

                                        </div>
                                    </div>
                                    <div className=" mt-1  h-[80%]  overflow-hidden overflow-y-scroll" id="scrollhoy3" >
                                        <ul className="relative py-5">
                                            <li className="flex  w-full font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <Image src={img1} className="rounded-full border-2 w-10 h-10 absolute z-10 border-white shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Jonny michel</p>

                                                </div>
                                            </li>
                                            <span className="w-[3px] h-[100%] absolute bg-[#EBEBEB] z-0 top-0 left-[5%]">

                                            </span>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <IoBag className="rounded-full bg-[#FF5370] w-10 h-10 p-2  text-white border-4 absolute z-10 border-[#FFA9B7] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">You have 3 pending Task.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <TiTick className="rounded-full bg-[#2ED8B6] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#96EBDA] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">New Order Received.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full font-popins text-x5s mt-6">
                                                <figure className=" relative w-[13%]">
                                                    <Image src={img1} className="rounded-full border-2 w-10 h-10 absolute z-10 border-white shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Jonny michel</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <IoBag className="rounded-full bg-[#FF5370] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#FFA9B7] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">You have 3 pending Task.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <TiTick className="rounded-full bg-[#2ED8B6] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#96EBDA] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">New Order Received.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                <div className="w-[33%] h-[320px] rounded-md overflow-hidden px-5 py-3 bg-white shadow-lg">
                                    <div className="flex justify-between">
                                        <div className="font-popins">
                                            <p className="my-3">lastest activity</p>
                                            <hr />
                                        </div>
                                        <div className="flex relative  overflow-hidden w-[30%] justify-end   items-center" >
                                            <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer overflow-visible duration-300" />
                                            <div className="absolute flex  right-[-100%] duration-300 ">
                                                <FaRecycle />
                                                <GoDash className="mx-2" />
                                                <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                            </div>

                                        </div>
                                    </div>
                                    <div className=" mt-1  h-[80%]  overflow-hidden overflow-y-scroll" id="scrollhoy3" >
                                        <ul className="relative py-5">
                                            <li className="flex  w-full font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Devlopment & Update</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <span className="w-[3px] h-[100%] absolute bg-[#EBEBEB] z-0 top-0 left-[5%]">

                                            </span>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Showcases</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#2ED8B6] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Miscellaneous</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#2ED8B6]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full font-popins text-x5s mt-6">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#FF5370] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#FF5370]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Showcases</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#2ED8B6] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Miscellaneous</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#2ED8B6]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>


                            </div>
                            <br />
                            <br />
                            <div className="w-full  shadow-lg rounded-md bg-white ">
                                <div className="flex justify-between px-5 py-5">
                                    <div className="font-popins">
                                        <p className="my-3">lastest activity</p>
                                        <hr />
                                    </div>
                                    <div className="flex relative  overflow-hidden w-[8%] justify-end   items-center" >
                                        <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer overflow-visible duration-300" />
                                        <div className="absolute flex  right-[-100%] duration-300 ">
                                            <FaRecycle />
                                            <GoDash className="mx-2" />
                                            <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                        </div>

                                    </div>
                                </div>
                                <div className="w-full flex  px-5 pb-5 font-popins3">
                                    <div className="w-[20%] ">
                                        <p>Name</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>Product Code	</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>Customer	</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>Status</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>Rating</p>
                                    </div>

                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Sofa</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD001		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>abc@gmail.com		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock	</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Computer</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD002		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>cdc@gmail.com			</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock		</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Mobile</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD003		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>pqr@gmail.com				</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock			</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Coat</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD004		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>bcs@gmail.com</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock			</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Watch</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD005		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>cdc@gmail.com	</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock			</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                                <hr />
                                <div className="flex w-full text-md px-5 py-5 text-x5s font-popins">
                                    <div className="w-[20%]">
                                        <p>Shoes</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>#PHD006		</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p>pqr@gmail.com					</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock			</span>
                                    </div>
                                    <div className="w-[20%] flex text-lg">
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#FFB64D]" />
                                        <IoIosStar className="text-[#D6D6D6]" />
                                    </div>


                                </div>
                            </div>
                            <br /><br />
                        </div>
                        <div className={clickico3 ? " lg:hidden px-5 block w-full h-fit  duration-700   " : " px-5   duration-700 h-fit lg:hidden block  w-full "}>
                            <div className="flex justify-between px-3 items-center flex-col  mt-28 w-full ">
                                <div className="flex items-center  flex-col">
                                    <div className="bg-[#4099FF] rounded-md px-2 py-2 shadow-lg mx-3">
                                        <LuHome className="text-2xl text-white  " />
                                    </div>
                                    <div >
                                        <h2 className="font-popins2 text-center  mt-2">Dashboard</h2>
                                        <p className="font-thin text-center">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex items-center text-sm  mt-3">
                                        <a href="#" className="hover:text-[#40B2FD] duration-300">
                                            <LuHome className="text-lg   " />
                                        </a>
                                        <span className="mx-3">/</span>
                                        <a href="#" className="hover:text-[#40B2FD] duration-300">
                                            <span>Dashboard</span>

                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full flex flex-col mt-9 ">
                                <div className="w-full rounded-lg shadow-lg flex-wrap bg-white flex justify-center py-3" >
                                    <div className="w-full ps-8 py-3">
                                        <p className="font-popins">Deals Analytics</p>
                                        <hr className="w-28 mt-3 bg-black" />
                                    </div>
                                    <figure className="">
                                        <Image src={img5} />
                                    </figure>

                                </div>
                                <div className="w-full mt-5 ">
                                    <div className="flex shadow-lg justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Impressions</p>
                                            <p className="text-[#4099FF] py-2 text-3xl font-popins">1,563</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#4099FF] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <FaEye className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex shadow-lg mt-3 justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Goal</p>
                                            <p className="text-[#2ED8B6] py-2 text-3xl font-popins">30,564</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#2ED8B6] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <GoGoal className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex shadow-lg mt-3 justify-between font-thin rounded-md bg-white group px-3 py-5">
                                        <div>
                                            <p className="py-3 font-popins">Impact</p>
                                            <p className="text-[#FEB54D] py-2 text-3xl font-popins">42.6%</p>
                                            <p>May 23 - June 01 (2017)</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <div className=" py-3 px-3 rounded-md transition-all bg-[#FEB54D] group-hover:rounded-[50%] transition-border  duration-300  ">
                                                <IoHandRightSharp className="text-white   text-2xl" />
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                            <br /><br />
                            <div className="w-full rounded-lg  bg-white shadow-lg">

                                <div className=" flex flex-wrap">
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Published Project</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">532</span>
                                            <span className="text-[#2ED8B6] font-popins">+1.69%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[30%] h-[100%] flex bg-[#FF5370] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[27%] translate-y-[-25%]  bg-white border-2 border-[#FF5370] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Completed Task</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">4,569</span>
                                            <span className="text-[#FF5370] font-popins">-0.5%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[60%] h-[100%] flex bg-[#4099FF] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[57%] translate-y-[-25%]  bg-white border-2 border-[#4099FF] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Successfull Task</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">89%</span>
                                            <span className="text-[#2ED8B6] font-popins">+0.99%</span>
                                        </li>
                                        <li className=" mt-7">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[80%] h-[100%] flex bg-[#2ED8B6] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[77%] translate-y-[-25%]  bg-white border-2 border-[#2ED8B6] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=" lg:w-[25%] w-full py-5 px-5">
                                        <li className="text-xl  font-thin">
                                            <p>Ongoing Project</p>
                                        </li>
                                        <li className="mt-3">
                                            <span className="font-popins me-3">365</span>
                                            <span className="text-[#2ED8B6] font-popins">+0.35%</span>
                                        </li>
                                        <li className=" mt-5 py-2">
                                            <div className="w-full h-[6px] bg-[#E9ECEF] rounded-e-lg relative">
                                                <span className="absolute w-[50%] h-[100%] flex bg-[#FFB64D] "> </span>
                                                <span className="w-4 h-4 rounded-full top-0 left-[47%] translate-y-[-25%]  bg-white border-2 border-[#FFB64D] absolute flex ">

                                                </span>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <br /><br />
                            <div className=" w-full flex flex-col ">
                                <div className="w-full">
                                    <figure className="px-2 py-3 h-[320px] rounded-md bg-[#4099FF]">
                                        <Image src={img6} />
                                    </figure>
                                </div>
                                <div className="bg-white w-full  h-[320px] px-5 py-3 overflow-hidden rounded-md px-2 py-3 shadow-lg mt-5 ">
                                    <div className="flex justify-between">
                                        <div className="font-popins">
                                            <p className="my-3">whats new</p>
                                            <hr />
                                        </div>
                                        <div className="flex relative  overflow-hidden w-[30%] justify-end   items-center" >
                                            <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer  overflow-visible translate-x-0 duration-300" />
                                            <div className="absolute flex  right-[-100%] duration-300 ">
                                                <FaRecycle />
                                                <GoDash className="mx-2" />
                                                <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                            </div>

                                        </div>
                                    </div>
                                    <div className=" mt-1  h-[80%]  overflow-hidden overflow-y-scroll" id="scrollhoy3" >
                                        <ul className="relative py-5">
                                            <li className="flex  w-full font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <Image src={img1} className="rounded-full border-2 w-10 h-10 absolute z-10 border-white shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Jonny michel</p>

                                                </div>
                                            </li>
                                            <span className="w-[3px] h-[100%] absolute bg-[#EBEBEB] z-0 top-0 left-[5%]">

                                            </span>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <IoBag className="rounded-full bg-[#FF5370] w-10 h-10 p-2  text-white border-4 absolute z-10 border-[#FFA9B7] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">You have 3 pending Task.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <TiTick className="rounded-full bg-[#2ED8B6] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#96EBDA] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">New Order Received.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full font-popins text-x5s mt-6">
                                                <figure className=" relative w-[13%]">
                                                    <Image src={img1} className="rounded-full border-2 w-10 h-10 absolute z-10 border-white shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Jonny michel</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <IoBag className="rounded-full bg-[#FF5370] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#FFA9B7] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">You have 3 pending Task.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]">
                                                    <TiTick className="rounded-full bg-[#2ED8B6] w-10 h-10 p-2 text-white border-4 absolute z-10 border-[#96EBDA] shadow-lg  left-0 top-0 " />
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">New Order Received.</p>
                                                    </a>
                                                    <p className="text-[#6C757D] my-2">Hemilton</p>

                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                <div className="w-full h-[320px] rounded-md overflow-hidden px-5 py-3 bg-white shadow-lg mt-5">
                                    <div className="flex justify-between">
                                        <div className="font-popins">
                                            <p className="my-3">lastest activity</p>
                                            <hr />
                                        </div>
                                        <div className="flex relative  overflow-hidden w-[30%] justify-end   items-center" >
                                            <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer overflow-visible duration-300" />
                                            <div className="absolute flex  right-[-100%] duration-300 ">
                                                <FaRecycle />
                                                <GoDash className="mx-2" />
                                                <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                            </div>

                                        </div>
                                    </div>
                                    <div className=" mt-1  h-[80%]  overflow-hidden overflow-y-scroll" id="scrollhoy3" >
                                        <ul className="relative py-5">
                                            <li className="flex  w-full font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Devlopment & Update</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <span className="w-[3px] h-[100%] absolute bg-[#EBEBEB] z-0 top-0 left-[5%]">

                                            </span>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Showcases</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#2ED8B6] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Miscellaneous</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#2ED8B6]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full font-popins text-x5s mt-6">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#FF5370] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3 ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Your Manager Posted.</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#FF5370]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#4099FF] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Showcases</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#90D7FF]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="flex  w-full mt-6 font-popins text-x5s">
                                                <figure className=" relative w-[13%]  flex justify-center">
                                                    <span className="rounded-full border-4 w-4 h-4 translate-x-[-3px] z-10 border-[#2ED8B6] bg-white shadow-lg  left-0 top-0 " ></span>
                                                </figure>
                                                <div className="  flex flex-col justify-center px-3  ">
                                                    <a href="" className="hover:text-[#46A7FF] duration-300">
                                                        <p className="text-sm">Miscellaneous</p>
                                                    </a>
                                                    <div className="flex  items-center">
                                                        <p className="text-[#6C757D] my-2">Lorem ipsum dolor sit amet.</p>
                                                        <a href="#"><span className="text-[#2ED8B6]">More</span></a>
                                                    </div>

                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>


                            </div>
                            <br />
                            <br />
                            <div className="w-full   shadow-lg rounded-md bg-white ">
                                <div className="flex justify-between px-5 py-5">
                                    <div className="font-popins">
                                        <p className="my-3">New Products</p>
                                        <hr />
                                    </div>
                                    <div className="flex relative  overflow-hidden  w-[30%] justify-end   items-center" >
                                        <FaAngleLeft onClick={(event) => sdcard(event)} className="cursor-pointer overflow-visible duration-300" />
                                        <div className="absolute flex  right-[-100%] duration-300 ">
                                            <FaRecycle />
                                            <GoDash className="mx-2" />
                                            <IoMdClose onClick={(event) => sdcard1(event)} className="cursor-pointer" />

                                        </div>

                                    </div>
                                </div>
                                <div className="w-full overflow-x-scroll " id="scrollhoy4">
                                    <div className="w-[200%] flex text-x5s  px-5 pb-5 font-popins3">
                                        <div className="w-[40%] ">
                                            <p>Name</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>Product Code	</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>Customer	</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>Status</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>Rating</p>
                                        </div>

                                    </div>
                                    <hr className="w-[200%]" />
                                    <div className="flex  text-md px-5 w-[200%] py-5 text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Sofa</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD001		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>abc@gmail.com		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock	</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>
                                    <hr className="w-[200%]"/>
                                    <div className="flex   px-5 w-[200%] py-5 text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Computer</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD002		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>cdc@gmail.com			</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock		</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>
                                    <hr className="w-[200%]" />
                                    <div className="flex   px-5 py-5 w-[200%] text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Mobile</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD003		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>pqr@gmail.com				</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock			</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>
                                    <hr className="w-[200%]"/>
                                    <div className="flex w-[200%] text-md px-5 py-5 text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Coat</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD004		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>bcs@gmail.com</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock			</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>
                                    <hr className="w-[200%]"/>
                                    <div className="flex  w-[200%] px-5 py-5 text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Watch</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD005		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>cdc@gmail.com	</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#2ED8B6] rounded-md px-2 py-1 text-white">In Stock			</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>
                                    <hr className="w-[200%]"/>
                                    <div className="flex w-[200%] px-5 py-5 text-x5s font-popins">
                                        <div className="w-[40%]">
                                            <p>Shoes</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>#PHD006		</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <p>pqr@gmail.com					</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <span className="bg-[#FF5370] rounded-md px-2 py-1 text-white">Out Stock			</span>
                                        </div>
                                        <div className="w-[40%] flex text-lg">
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#FFB64D]" />
                                            <IoIosStar className="text-[#D6D6D6]" />
                                        </div>


                                    </div>

                                </div>



                            </div>
                            <br /><br />
                        </div>



                        <div className={clickico4 ? "fixed w-[65%] z-50 lg:hidden h-screen overflow-y-scroll bg-[#263544] opacity-100 [transition:opacity_0.3s,left_.7s,top_.7s] top-[0%] left-0" : "fixed z-50 opacity-0   [transition:opacity_0.3s,left_.7s,top_.7s] w-[65%]  lg:hidden h-screen overflow-y-scroll bg-[#263544] top-[60%] left-[-120%]"} id="scrollhoy2">
                            <Aps />

                        </div>
                        <div className="w-full z-50  top-0 left-0   fixed flex">
                            <div className="flex lg:hidden justify-between w-full bg-[#263544] relative ">

                                <div className="flex px-4 py-5 items-center cursor-pointer" onClick={() => setclickico4(!clickico4)}>
                                    {clickico4 ? <FiToggleLeft className="text-white text-xl" /> : <FiToggleRight className="text-white text-xl" />}
                                </div>
                                <figure className="py-5">
                                    <Image src={img4} />
                                </figure>
                                <div className="flex items-center py-5 px-4  cursor-pointer   " onClick={() => setclickico5(!clickico5)}>
                                    <IoEllipsisHorizontalSharp className="text-white text-2xl" />

                                </div>
                                <div className="absolute top-[100%] right-0 w-full shadow-lg   bg-white flex justify-end  ">
                                    <div className={clickico5 ? " flex justify-center items-center cursor-pointer px-5 py-4    " : "  justify-center items-center cursor-pointer px-5 py-4  hidden  "}>
                                        <div className="flex justify-center items-center me-5  relative   ">
                                            <div className="relative  " onClick={() => setclickico2(!clickico2)}>
                                                <IoMdNotificationsOutline className="text-[#333333] text-2xl  " />
                                                <span className="absolute animate-[op_2s_ease-in-out_infinite] bg-red-500 right-[-25%] top-[-50%] w-5 h-5 font-popins2 text-x5s flex justify-center items-center text-white rounded-full">5</span>
                                            </div>
                                            <div className="relative  mx-8" onClick={() => setclickico1(!clickico1)}>
                                                <CiChat1 className="text-2xl   text-[#333333]" />
                                                <span className="w-5 h-5 animate-[op_2s_ease-in-out_infinite] text-white rounded-full bg-green-600 right-[-25%] top-[-50%] absolute font-popins2 text-x5s flex items-center justify-center ">3</span>
                                            </div>
                                            <div className={clickico2 ? "w-[250%]  rounded-md block translate-x-[-7%] shadow-2xl  bg-white absolute left-0 top-[300%]" : "w-[250%] rounded-md hidden translate-x-[-7%] shadow-2xl  bg-white absolute left-0 top-[300%]"}>
                                                <ul className="py-5 text-x4s ">
                                                    <li className="flex capitalize justify-between px-5">
                                                        <p className="font-popins3">Notification</p>
                                                        <span className=" font-popins3 py-1 px-2 rounded-md bg-red-500 text-x5s text-white">New</span>
                                                    </li>
                                                    <li className="flex px-5 py-3 mt-2  hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[15%]">
                                                            <figure>
                                                                <Image src={img1} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                    <li className="flex px-5 py-3   hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[15%]">
                                                            <figure>
                                                                <Image src={img2} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                    <li className="flex px-5 py-3  hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[15%]">
                                                            <figure>
                                                                <Image src={img1} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="absolute right-[80%] top-[-4%] shadow-2xl ">
                                                    <FaCaretUp className="text-4xl text-white" />
                                                </div>
                                            </div>
                                            <div className={clickico1 ? "fixed cursor-default right-0 top-0 w-[60%] h-screen z-10 bg-white duration-700 shadow-xl" : "fixed duration-700 cursor-default right-[-100%] top-0 w-[60%] h-screen z-10 bg-white shadow-xl"}>
                                                <div className="flex w-full bg-white justify-center py-5 text-x5s px-3">
                                                    <input type="text" placeholder="search friend" className="duration-300 focus:[box-shadow:0px_0px_2px_2px_#BFDEFF] w-[70%] placeholder:capitalize outline-none ps-3 border rounded-s-sm" name="" id="" />
                                                    <div className="px-5 py-3 rounded-e-md bg-[#4099FF]">
                                                        <IoSearchOutline className="text-xl   text-white" />

                                                    </div>
                                                </div>
                                                <ul className="mt-6 text-x5s">
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img1} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    josephin doe
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img2} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    lary doe
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img3} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    alice
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img1} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    alia
                                                                </p>
                                                                <div>
                                                                    <p className="text-x5s"> 10  min  ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img2} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    suzen
                                                                </p>
                                                                <div>
                                                                    <p className="text-x5s"> 15  min  ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5 " >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />

                                                </ul>
                                                <div onClick={() => setclickico1(!clickico1)} className={clickico1 ? "absolute  animate-[op1_2s_forwards] animation-delay-1000 opacity-0  z-0 right-[100%] shadow-lg top-[20%] cursor-pointer bg-white px-4 py-2 rounded-s-full " : "absolute opacity-0  z-0 left-[0%] shadow-lg top-[20%] cursor-pointer bg-white px-4 py-2 rounded-s-full "}>
                                                    <AiOutlineClose className="text-xl text-black" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex  items-center  relative" onClick={() => (setclickmenu(!clickmenu))}>
                                            <figure className="flex ">
                                                <Image src={img} className="w-8 shadow-lg rounded-full  border-white border-2 bg-white" />
                                            </figure>
                                            <figcaption className="text-[#333333] mx-7 capitalize ">
                                                {router.name}
                                            </figcaption>
                                            <div>
                                                <FaAngleDown className="text-[#333333]" />

                                            </div>
                                            <div className={clickmenu ? "absolute w-[150%]  min-h-28 font-popins3 bg-white [box-shadow:0px_0px_25px_0px_black] rounded-md left-[-50%] top-[200%]" : "absolute w-[150%]  min-h-28 font-popins3 bg-white [box-shadow:0px_0px_25px_0px_black] hidden rounded-md left-[-50%] top-[200%]"}>

                                                <ul className="w-full py-5 ">
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><IoIosSettings className="me-3 text-xl" /> setting</li>
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><CgProfile className="me-3 text-xl" /> profile</li>

                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><TiMail className="me-3 text-xl" /> my message</li>
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><FaLock className="me-3 text-xl" /> lock screen</li>

                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><IoIosLogOut className="me-3 text-xl" /> logout</li>

                                                </ul>
                                                <span className="absolute top-[-10%]  right-0 ">
                                                    <FaCaretUp className="text-5xl text-white" />

                                                </span>
                                            </div>


                                        </div>


                                    </div>

                                </div>

                            </div>


                            <div className="lg:w-[20%] px-2  w-full hidden lg:block  bg-[#263544]  ">
                                <div className="flex   h-[100%]  justify-between items-center ">
                                    <figure>
                                        <Image src={img4} className="" />
                                    </figure>
                                    <div className=" cursor-pointer" onClick={() => (setclickico3(!clickico3), clikfunc())} >
                                        {clickico3 ? <FiToggleLeft className="text-white text-xl" /> : <FiToggleRight className="text-white text-xl" />}




                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[80%] h-[100%] bg-gray-300">
                                <div className=" h-[100%] px-14 shadow hidden lg:flex bg-[#FFFFFF] justify-between ">
                                    <div className="  cursor-pointer  flex">
                                        <div className="flex  py-7">
                                            <SiCivicrm className="text-[#333333]  flex text-2xl" />
                                            <a href="#" className="  flex mx-10">
                                                <MdOutlineSearch className="text-[#333333]  h-min  text-2xl " />
                                            </a>
                                        </div>

                                    </div>
                                    <div className=" flex justify-center items-center cursor-pointer  ">
                                        <div className="flex justify-center items-center me-5  relative  ">
                                            <div className="relative  " onClick={() => setclickico2(!clickico2)}>
                                                <IoMdNotificationsOutline className="text-[#333333] text-2xl  " />
                                                <span className="absolute animate-[op_2s_ease-in-out_infinite] bg-red-500 right-[-25%] top-[-50%] w-5 h-5 font-popins2 text-x5s flex justify-center items-center text-white rounded-full">5</span>
                                            </div>
                                            <div className="relative  mx-8" onClick={() => setclickico1(!clickico1)}>
                                                <CiChat1 className="text-2xl  text-[#333333]" />
                                                <span className="w-5 h-5 animate-[op_2s_ease-in-out_infinite] text-white rounded-full bg-green-600 right-[-25%] top-[-50%] absolute font-popins2 text-x5s flex items-center justify-center ">3</span>
                                            </div>
                                            <div className={clickico2 ? "w-[300%] rounded-md block translate-x-[-83%] shadow-2xl  bg-white absolute left-0 top-[300%]" : "w-[300%] rounded-md hidden translate-x-[-83%] shadow-2xl  bg-white absolute left-0 top-[300%]"}>
                                                <ul className="py-5 ">
                                                    <li className="flex capitalize justify-between px-5">
                                                        <p className="font-popins3">Notification</p>
                                                        <span className=" font-popins3 py-1 px-2 rounded-md bg-red-500 text-x5s text-white">New</span>
                                                    </li>
                                                    <li className="flex px-5 py-3 mt-2  hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[20%]">
                                                            <figure>
                                                                <Image src={img1} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                    <li className="flex px-5 py-3   hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[20%]">
                                                            <figure>
                                                                <Image src={img2} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                    <li className="flex px-5 py-3  hover:bg-[#F1F1F1] duration-300">
                                                        <div className="w-[20%]">
                                                            <figure>
                                                                <Image src={img1} className="rounded-full" />
                                                            </figure>
                                                        </div>
                                                        <div className="w-[80%] ps-5 ">
                                                            <h4 className="capitalize font-popins2">John Doe</h4>
                                                            <p className="font-popins text-x6s">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <span className="text-[#97A1A5]">30 minutes ago</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="absolute right-0 top-[-4%] shadow-2xl ">
                                                    <FaCaretUp className="text-4xl text-white" />
                                                </div>
                                            </div>
                                            <div className={clickico1 ? "fixed cursor-default right-0 top-0 w-[23%] h-screen z-10 bg-white duration-700 shadow-xl" : "fixed duration-700 cursor-default right-[-100%] top-0 w-[23%] h-screen z-10 bg-white shadow-xl"}>
                                                <div className="flex bg-white justify-center py-5">
                                                    <input type="text" placeholder="search friend" className="duration-300 focus:[box-shadow:0px_0px_2px_2px_#BFDEFF] placeholder:capitalize outline-none ps-3 border rounded-s-sm" name="" id="" />
                                                    <div className="px-5 py-3 rounded-e-md bg-[#4099FF]">
                                                        <IoSearchOutline className="text-xl   text-white" />

                                                    </div>
                                                </div>
                                                <ul className="mt-6">
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img1} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    josephin doe
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img2} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    lary doe
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img3} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    alice
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img1} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    alia
                                                                </p>
                                                                <div>
                                                                    <p className="text-x5s"> 10  min  ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5" >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="flex justify-between my-4">
                                                        <div className="flex  items-center px-4">
                                                            <figure className="me-3">
                                                                <Image src={img2} className="w-12 border border-2 border-white shadow-lg rounded-full" />
                                                            </figure>
                                                            <div>
                                                                <p className="capitalize font-popins3 ">
                                                                    suzen
                                                                </p>
                                                                <div>
                                                                    <p className="text-x5s"> 15  min  ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" items-center flex justify-center me-5 " >
                                                            <TbPointFilled className="text-green-600 text-xl" />

                                                        </div>
                                                    </li>
                                                    <hr />

                                                </ul>
                                                <div onClick={() => setclickico1(!clickico1)} className={clickico1 ? "absolute animate-[op1_2s_forwards] animation-delay-1000 opacity-0  z-0 right-[100%] shadow-lg top-[20%] cursor-pointer bg-white px-4 py-2 rounded-s-full " : "absolute opacity-0  z-0 left-[0%] shadow-lg top-[20%] cursor-pointer bg-white px-4 py-2 rounded-s-full "}>
                                                    <AiOutlineClose className="text-xl text-black" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex  items-center relative" onClick={() => (setclickmenu(!clickmenu))}>
                                            <figure className="flex ">
                                                <Image src={img} className="w-10 shadow-lg rounded-full border border-white border-2 bg-white" />
                                            </figure>
                                            <figcaption className="text-[#333333] mx-7 capitalize">
                                                {router.name}
                                            </figcaption>
                                            <div>
                                                <FaAngleDown className="text-[#333333]" />

                                            </div>
                                            <div className={clickmenu ? "absolute w-[150%]  min-h-28 font-popins3 bg-white [box-shadow:0px_0px_25px_0px_black] rounded-md left-[-50%] top-[200%]" : "absolute w-[150%]  min-h-28 font-popins3 bg-white [box-shadow:0px_0px_25px_0px_black] hidden rounded-md left-[-50%] top-[200%]"}>

                                                <ul className="w-full py-5 ">
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><IoIosSettings className="me-3 text-xl" /> setting</li>
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><CgProfile className="me-3 text-xl" /> profile</li>

                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><TiMail className="me-3 text-xl" /> my message</li>
                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><FaLock className="me-3 text-xl" /> lock screen</li>

                                                    <li className="flex  hover:bg-[#F1F1F1] duration-300 capitalize text-md  px-5 py-2 items-center"><IoIosLogOut className="me-3 text-xl" /> logout</li>

                                                </ul>
                                                <span className="absolute top-[-10%]  right-0 ">
                                                    <FaCaretUp className="text-5xl text-white" />

                                                </span>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
function Aps() {
    const [clikfuc, setclikfuc] = useState(false)
    const [clikfuc2, setclikfuc2] = useState(false)
    const [clikfuc3, setclikfuc3] = useState(false)
    const [clikfuc4, setclikfuc4] = useState(false)
    const [clikfuc5, setclikfuc5] = useState(false)
    const [clikfuc6, setclikfuc6] = useState(false)
    const [clikfuc7, setclikfuc7] = useState(false)
    const [clikfuc8, setclikfuc8] = useState(false)
    const [clikfuc9, setclikfuc9] = useState(false)







    return (
        <div className=" mt-24 text-white capitalize ">
            <ul className="">
                <li className="font-popins ms-4 text-x5s">
                    navigation
                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc(!clikfuc))} className="w-full relative bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <IoMdHome className="me-3 text-xl" />
                            <span className="font-popins text-x5s ">
                                Dashboard
                            </span>
                            <span className="absolute flex bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc ? <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> default</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> crm</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> anaylatics</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                    </ul> : <ul className=" relative text-x5s  overflow-hidden duration-300 h-0" >
                        <li className="  items-center text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> default</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> crm</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> anaylatics</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                    </ul>}

                </li>
                <li className="mt-2 ">
                    <a href="#" onClick={() => setclikfuc2(!clikfuc2)} className="w-full group relative text-[#95C0CD] focus:bg-[#1D2531] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between">
                        <div className="flex items-center ">
                            <LuLayout className="me-3 text-xl" />
                            <span className="font-popins text-x5s">
                                Page layout
                            </span>
                            <span className=" w-[4px] h-[100%] flex group-focus:bg-[#42A5F5] absolute top-0 left-0 "></span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-x4s bg-[#FFB64D] py-1 px-2 rounded-md text-white me-3"> new</span>
                            {clikfuc2 ? <FaAngleDown /> : <FaAngleRight />}
                        </div>

                    </a>
                    {clikfuc2 ? <ul className=" relative bg-[#222D3B] font-number text-x5s overflow-hidden duration-300 " >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> vertical</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> herozintal</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> bottom menu</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                    </ul> : <ul className=" relative text-x5s overflow-hidden duration-300 h-0 " >
                        <li className="  items-center text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> vertical</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> herozintal</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> bottom menu</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                    </ul>}

                </li>
                <li className="mt-2 ">
                    <a href="#" className="w-full group relative text-[#95C0CD] focus:bg-[#1D2531] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between">
                        <div className="flex items-center ">
                            <PiListFill className="me-3 text-xl" />
                            <span className="font-popins text-x5s">
                                Page layout
                            </span>
                            <span className=" w-[4px] h-[100%] flex group-focus:bg-[#42A5F5] absolute top-0 left-0 "></span>
                        </div>


                    </a>
                </li>
                <li className="mt-2 ">
                    <a href="#" onClick={() => setclikfuc3(!clikfuc3)} className="w-full group relative text-[#95C0CD] focus:bg-[#1D2531] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between">
                        <div className="flex items-center ">
                            <IoAppsSharp className="me-3 text-xl" />
                            <span className="font-popins capitalize text-x5s">
                                widget
                            </span>
                            <span className=" w-[4px] h-[100%] flex group-focus:bg-[#42A5F5] absolute top-0 left-0 "></span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-x4s bg-[#FF5370] py-1 px-2 rounded-md text-white me-3"> 100+</span>
                            {clikfuc3 ? <FaAngleDown /> : <FaAngleRight />}
                        </div>

                    </a>
                    {clikfuc3 && <ul className=" relative font-number text-x5s overflow-hidden duration-300  " >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> statistic</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> data</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> chart widget</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                    </ul>}
                </li>
                <li className="font-popins ms-4 mt-5 text-x5s">
                    UI Element
                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc4(!clikfuc4))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <SiFirebase className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                basic
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc4 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc4 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc5(!clikfuc5))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <IoFlashSharp className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                advance
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc5 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc5 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc6(!clikfuc6))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <FaHandsHoldingCircle className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                extra
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc6 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc6 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc7(!clikfuc7))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <FaIcons className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                icons
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc7 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc7 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="font-popins ms-4 mt-5 text-x5s">
                    forms
                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc8(!clikfuc8))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <FaWpforms className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                form
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc8 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc8 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center  w-full justify-between ">
                            <div className="flex items-center">
                                <LuPencilLine className="me-3 text-xl" />
                                <span className="font-popins text-x5s capitalize ">
                                    form picker
                                </span>
                            </div>

                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                            <div>
                                <span className="bg-[#FFB64D] text-white py-1 px-2 text-x5s rounded-md ">
                                    new
                                </span>
                            </div>


                        </div>




                    </a>


                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <LiaWpforms className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                form select
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>




                    </a>


                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <SiInformatica className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                form masking
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>




                    </a>


                </li>
                <li className="font-popins ms-4 mt-5 text-x5s">
                    Tables
                </li>
                <li className="  mt-3 ">
                    <a href="#" onClick={() => (setclikfuc9(!clikfuc9))} className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <TbTableShare className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                bootstrap tables
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>

                        {clikfuc9 ? <FaAngleDown /> : <FaAngleRight />}


                    </a>
                    {clikfuc9 && <ul className=" h-fit font-number text-x5s bg-[#222D3B] relative  overflow-hidden duration-300" >
                        <li className="  items-center ">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> alert</span>
                            </a>
                        </li>
                        <li className="  items-center duration-300 hover:text-[#3F9FDD] text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="uppercase ms-3 "> breadcrums</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD] duration-300 text-[white]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> button</span>
                            </a>
                        </li>
                        <span className="w-[4px] h-[100%] flex bg-[#42A5F5] absolute top-0 left-0">

                        </span>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> box shadow</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> according </span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> Tabs</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> color</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> label badge</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> list</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> tooltip</span>
                            </a>
                        </li>
                        <li className="  items-center hover:text-[#3F9FDD]">
                            <a href="#" className="py-3 ps-6 pe-3 flex items-center ">
                                <FaChevronRight className="text-x5s" />
                                <span className="capitalize ms-3 "> typographi</span>
                            </a>
                        </li>
                    </ul>}

                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center  w-full justify-between ">
                            <div className="flex items-center">
                                <MdDataset className="me-3 text-xl" />
                                <span className="font-popins text-x5s capitalize ">
                                    data table
                                </span>
                            </div>

                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                            <div>

                            </div>


                        </div>




                    </a>


                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <IoExtensionPuzzleSharp className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                DT Extension
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>




                    </a>


                </li>
                <li className="  mt-3 ">
                    <a href="#" className="w-full group relative focus:bg-[#1D2531] text-[#95C0CD] hover:text-[white] duration-300 py-3 ps-6 pe-3 flex items-center justify-between" >
                        <div className="flex items-center ">
                            <CiHashtag className="me-3 text-xl" />
                            <span className="font-popins text-x5s capitalize ">
                                footable
                            </span>
                            <span className="absolute flex group-focus:bg-[#42A5F5] top-0 left-0 w-[4px] h-[100%]">

                            </span>
                        </div>




                    </a>


                </li>


            </ul>
        </div>
    )

}