import React, { useState, useEffect } from 'react';
import Navbar from './component/navbar';
import Sidebar from './component/Sidebar';
import Profile from './component/profile'
import TableKar from './component/tableKarUser';
import TableSis from './component/tableSisUser';
import TableGur from './component/tableGurUser';
import Home from './component/Home';
import WebFont from 'webfontloader';

const AppUser = () => {

  //Font
  useEffect(() =>{
    WebFont.load({
      google:{
        families:['Manrope']
      }
    })
  })
  
  //Script sidebar
  const[openSide, setOpenSide]=useState(false);
  const sideClick = () => {
    setOpenSide(!openSide);
  }

  //Script profile
  const[openProf, setOpenProf]=useState(false);
  const profClick = () =>{
    setOpenProf(!openProf)
  }

  //Script Table
  const[tabKar, setTabKar]=useState(false);
  const[tabSis, setTabSis]=useState(false);
  const[tabGur, setTabGur]=useState(false);
  const[home,setHome]=useState(true);

  const homeClick = () =>{
    setHome(true)
    setTabKar(false)
    setTabGur(false)
    setTabSis(false)
  }

  const tabKarClick = () =>{
    setHome(false)
    setTabKar(true)
    setTabSis(false)
    setTabGur(false)
  }
  const tabSisClick = () =>{
    setHome(false)
    setTabKar(false)
    setTabSis(true)
    setTabGur(false)
  }
  const tabGurClick = () =>{
    setHome(false)
    setTabKar(false)
    setTabSis(false)
    setTabGur(true)
  }

  //View
  return ( 
    <div className='w-full'>
      <Navbar onClick={sideClick} open={openSide} onProf={profClick} openProf={openProf} onHome={home}/>
      <Sidebar onClick={sideClick} open={openSide} onTabKarClick={tabKarClick} onTabSisClick={tabSisClick} 
      onTabGurClick={tabGurClick} onTabGur={tabGur} onTabKar={tabKar} onTabSis={tabSis} onHomeClick={homeClick} onHome={home}/>
      <Profile open={openProf}/>
      <Home open={home} onTabKar={tabKarClick} onTabGur={tabGurClick} onTabSis={tabSisClick}/>
      <div className='mt-32'>
      <TableKar open={tabKar}/>
      <TableSis open={tabSis}/>
      <TableGur open={tabGur}/>
      </div>
    </div>
   );
}
 
export default AppUser;