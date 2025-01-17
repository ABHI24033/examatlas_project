import React from "react";
import { MdArrowRight } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoTrophySharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import pic8 from "../../src/images/pic8.png";

const Body = () => {
    return (
        <>
            <div className="flex justify-between h-[530px] w-[1540px] bg-gradient-to-t from-blue-200 to-white m-5 rounded-md mt-10 relative">
                <div className="pl-56 pt-32">
                    <p className="text-4xl">
                        One Destination for <br />
                        <span className="font-semibold">Complete Exam Preparation</span>
                    </p>

                    <div className="flex pt-4 space-x-4">
                        <p className="flex items-center">
                            Learn <MdArrowRight className="ml-1 text-blue-500 text-2xl" />
                        </p>
                        <p className="flex items-center">
                            Practice <MdArrowRight className="ml-1 text-blue-500 text-2xl" />
                        </p>
                        <p className="flex items-center">
                            Improve <MdArrowRight className="ml-1 text-blue-500 text-2xl" />
                        </p>
                        <p className="flex items-center">
                            Succeed <MdArrowRight className="ml-1 text-blue-500 text-2xl" />
                        </p>
                    </div>

                    <p className="pt-11">Start your preparation for selections. For Free!</p>

                    <button className="bg-green-600 text-white p-3 mt-4 rounded-md hover:bg-green-500 font-semibold">
                        Get started for free
                    </button>
                </div>

                <div className="pr-16">
                    <img
                        src={pic8}
                        alt="Exam Preparation"
                        className="h-full w-auto"
                    />
                </div>


                <div className="absolute  rounded-md top-[470px] ml-[300px] w-[1000px] h-[130px] bg-white flex ">

                    <div className="border border-blue-200 rounded-md m-2 p-5 bg-blue-200 w-[300px] flex items-center space-x-4">
                        <AiFillSafetyCertificate className="text-3xl text-green-600" />
                        <div>
                            <p>Registered Students</p>
                            <span className="font-semibold">6.1+ Crore</span>
                        </div>
                    </div>

                    <div className=" m-2 p-5 w-[300px] flex items-center space-x-4 ">
                        <IoTrophySharp className="text-3xl text-yellow-600" />
                        <div>
                            <p>Student Selections</p>
                            <span className="font-semibold">4 + Lacs</span>
                        </div>
                    </div>

                    <div className=" m-2 p-5 w-[300px] flex items-center space-x-4">
                        <FaClipboardList className="text-3xl text-purple-600" />
                        <div>
                            <p>Tests Attempted</p>
                            <span className="font-semibold">242+ Crore</span>
                        </div>
                    </div>

                    <div className=" m-2 p-5 w-[300px] flex items-center space-x-4">
                        <HiQuestionMarkCircle className="text-3xl text-orange-600" />
                        <div>
                            <p>Classes Attended</p>
                            <span className="font-semibold">6.1+ Crore</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Body;


