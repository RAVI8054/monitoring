import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";

const Sidebar=(props)=>{
                  console.log(props)
                return(
    <>
     <div className=" py-5 w-64 h-full bg-slate-600">
        <div>
            <a href="https://iotcom.io/" target="_blank">
            <img src="https://monitoring.iotcom.io/Frame 66.png">
            </img></a>
        </div>
        <div>
           <div className="flex text-xl font-semibold mt-10">
             <HiDesktopComputer />
             <span>Monitoring</span>
           </div>
           <div className="flex text-xl font-semibold my-5">
             <FaShieldAlt />
             <span>Events</span>
           </div>
           <div className="flex text-xl font-semibold my-5">
             <FaChartLine />
             <span>Status pages</span>
            </div>
           <div className="flex text-xl font-semibold my-5">
             <FaTrash />
             <span>Trash</span>
           </div>
           <div className="flex text-xl font-semibold my-5">
            <FaUser />
            <span>Team members</span>
           </div>
           <div className="flex text-xl font-semibold my-5">
             <FaFireAlt />
             <span>Integration</span>
             </div>
    
        </div>
        <div> 
          <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547">
          </img>
        <span>shiv</span>
        </div>
        </div>
    </>
  )}

  export default Sidebar