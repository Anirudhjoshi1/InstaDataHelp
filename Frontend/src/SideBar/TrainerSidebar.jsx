import React from 'react'
import './TrainerSidebar.css'
import {SideBarData} from './SideBarData'
import ACEPITCH from '../assets/ACEPITCH.png';

const TrainerSidebar = () => {


  return (
    <div className='sidebar'>
      <ul className='SideBarList'>
        <div className='trainer-logo-wrapper'>
          <img src={ACEPITCH} alt="" className='trainer-logo' />
        <h1 className='SidebarHeading'>Trainer</h1>
        </div>
      {SideBarData.map((val ,key)=>{
        return(
          <li id={window.location.pathname == val.link ? "active" : ""} className='row' key={key} onClick={()=>{window.location.pathname= val.link}}>
            
            <div id='icon'>{val.icon}</div>{" "}
            <div id='title'>{val.title}</div>{}
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default TrainerSidebar