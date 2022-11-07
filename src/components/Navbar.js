import { useState } from 'react'
import { navbarItems } from '..'
import logo from './assets/nurish.png'

const Navbar = () => {
  return (
    <div className="w-full flex py-6 px-10 justify-between items-center navbar bg-background">
      <img src={logo} className="w-[180px]"/>
      <ul className="justify-end items-center sm:flex flex-1 list-none hidden">
        {navbarItems.map((elem, index) => (
          <li key={elem.id} className={`font-poppins text-[20px] cursor-pointer ${index === navbarItems.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${elem.id}`}>{elem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar