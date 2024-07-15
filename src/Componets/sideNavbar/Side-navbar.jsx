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
        <div className="p-[150px]">
            <a href="https://iotcom.io/" target="_blank">
            <img src="https://monitoring.iotcom.io/Frame 66.png">
            </img></a>
        </div>
        <div>
           <div>
             <HiDesktopComputer />
             <span>Monitoring</span>
           </div>
           <div>
             <FaShieldAlt />
             <span>Events</span>
           </div>
           <div>
             <FaChartLine />
             <span>Status pages</span>
            </div>
           <div>
             <FaTrash />
             <span>Trash</span>
           </div>
           <div>
            <FaUser />
            <span>Team members</span>
           </div>
           <div>
             <FaFireAlt />
             <span>Integration</span>
             </div>
    
        </div>
        <div> 
          <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547">
          </img>
        <span>shiv</span>
        </div>
    </>
  )}

  export default Sidebar