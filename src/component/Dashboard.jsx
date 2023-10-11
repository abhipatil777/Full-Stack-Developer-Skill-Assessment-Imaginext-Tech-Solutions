import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiSolidBell } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdLocalMovies} from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
// import { GrAddCircle } from "react-icons/gr";
import Data from "../Data.json"
import Booked_ticket from "../Booked_ticket.json"
import avtar from "../assets/images/Avatar-Profile-PNG-Free-Image.png"
import add from "../assets/images/add.png"
const Dahboard = () => {
const currentDate = new Date();
const options = { month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);
    return (
        <div>
            <section className='main_page'>
                <div className='contaniner-fluid'>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='first_row'>
                                <h3 className='booking_h1'>B<big style={{ fontSize: '40px', fontWeight: 'bold' }}>oo</big>king <br /> <span className='window'><big style={{ fontSize: '40px', fontWeight: 'bold' }}>W</big>indow</span> </h3>
                                <img className='center mt-4' src={avtar} alt="" width={100} height={100} />
                                <h6 className='text-center'>Jonathan Patton</h6>
                                <p className='text-center'>User</p>
                                <h6 className='text-center'><MdOutlineMarkEmailUnread /><span className='ms-3'><BiSolidBell /></span></h6>
                                <div className="navigation mt-5">
                                  <div className="rt1">
                                     <HiOutlineHome className='mb-2 mt-1 me-1 list_1' />   <NavLink className='list_1' to="/">   Dashboard</NavLink> <br />
                                    <AiOutlineTeam className='mb-2 mt-1 me-1' />    <NavLink to="/team"> Team</NavLink> <br />
                                    <MdLocalMovies className='mb-2 mt-1 me-1' />  <NavLink to='/movies'> Movies</NavLink> <br />
                                    <MdEventSeat className='mb-2 mt-1 me-1' />  <NavLink to="/events"> Events</NavLink> <br />
                                    <FaTasks className='mb-2 mt-1 me-1' />   <NavLink to="/tasks"> Tasks</NavLink> <br />
                                    <HiOutlineDocumentText className='mb-2 mt-1 me-1' />    <NavLink to="/documentation"> Documentation</NavLink> <br />
                                  </div>
                                </div>
                                <div className="logout ms-5">
                                    <a href="" className='log_out text-secondary position-absolute bottom-0 mb-lg-5 mt-5 start-3'><CiLogout/> Log Out</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-9 bg-light">
                            <div className="second_row d-flex justify-content-between">
                                <div className="first_col mt-4 ms-2">
                                  <span className='search mt-1'><IoIosSearch/></span><input type="search" placeholder='search' style={{borderRadius:'10px',padding:"5px"}} />
                                </div>
                                <div className="cal mt-4 me-5">
                                    <AiOutlineCalendar className='fs-5'/><span> {formattedDate}</span>
                                </div>
                            </div>
                            <div className="second_col mt-5 ms-2 d-flex justify-content-between">
                                <h3>Welcome!</h3>
                                <div className="add me-5">
                                 <img src={add} alt="add" height={35} width={35} />
                                </div>
                            </div>
                            <div className="third_col flex-wrap justify-content-around d-flex mt-3 me-3">
                           { Data.map((item,id)=>{
                                return  <div className="first_box mt-3"  key={id}>
                                   <h6>{item.sb} <span className='fs-5'style={{float:"right"}}>...</span></h6>
                                   <hr />
                                   <h1>{item.bn}</h1>
                                   <h6>{item.sn}</h6>
                                </div>
                               
                            })}
                            </div>
                            <div className="fourth_col d-flex flex-wrap justify-content-center mt-3 mb-3 ms-3">
                                <div className="second_box mt-3 me-4">
                                   <h5>Recently Booked Tickets</h5>
                                   <hr />
                                   {
                                    Booked_ticket.map((item,id)=>{
                                        return <h6 className='mb-2' key={id}>{item.Tickets} Ticket for <span className='fw-bold'>Movie 123</span> <br/> booked by <span className='fw-bold'>{item.Movie_Name}</span></h6>
                                   
                                    })
                                   }
                                </div>
                                <div className="third_box mt-3 me-3">
                                  <h5 className='pt-4'><hr /></h5>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dahboard
