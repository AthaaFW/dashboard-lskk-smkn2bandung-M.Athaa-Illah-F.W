import React, { useState } from 'react';
import Navbar from './component/navbar';
import Sidebar from './component/Sidebar';
import Profile from './component/profile'
import TableKar from './component/tableKar';
import TableSis from './component/tableSis';
import TableGur from './component/tableGur'

const App = () => {
  
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
  const[tabKar, setTabKar]=useState(true);
  const[tabSis, setTabSis]=useState(false);
  const[tabGur, setTabGur]=useState(false);
  const tabKarClick = () =>{
    setTabKar(true)
    setTabSis(false)
    setTabGur(false)
  }
  const tabSisClick = () =>{
    setTabKar(false)
    setTabSis(true)
    setTabGur(false)
  }
  const tabGurClick = () =>{
    setTabKar(false)
    setTabSis(false)
    setTabGur(true)
  }

  //View
  return ( 
    <div>
      <Navbar onClick={sideClick} open={openSide} onProf={profClick} openProf={openProf}/>
      <Sidebar onClick={sideClick} open={openSide} onTabKarClick={tabKarClick} onTabSisClick={tabSisClick} 
      onTabGurClick={tabGurClick} onTabGur={tabGur} onTabKar={tabKar} onTabSis={tabSis}/>
      <Profile open={openProf}/>
      <TableKar open={tabKar}/>
      <TableSis open={tabSis}/>
      <TableGur open={tabGur}/>
      
    </div>
   );
}
 
export default App;