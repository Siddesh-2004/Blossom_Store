import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import './NavBar.css'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <>
    <div className="navContainer">
      <div className="navTabListConatiner1">
        <ul className="navTabList1">
          
         <NavLink to='/' className={({isActive})=>`${isActive?"Active":"Inactive"}`}><li >Home</li></NavLink> 
        
          <NavLink to='/about' className={({isActive})=>`${isActive?"Active":"Inactive"}`}>  <li>About  </li></NavLink>
        
        
         
         
          <NavLink to='/contact' className={({isActive})=>`${isActive ? "Active":"Inactive"}`}> <li>Contact  </li></NavLink>
        
          
          <NavLink to='/help' className={({isActive})=>`${isActive?"Active":"Inactive"}`}><li>Help </li></NavLink> 
         
        </ul>
      </div>
      <div className="menuContainer">
  
<select id="options" name="options"  className="dropDownMenu">
<option defaultValue="" disabled selected hidden>MENU</option>
<option value="option1">Option 1</option>
<option valuealue="option2">Option 2</option>
<option valuealue="option3">Option 3</option>
</select>
      </div>
      <div className="navTabListContainer2">
        <ul className="navTabList2">
          <li className="searchBarlistElement">
            <div className="searchBarContainer">
              <input type="text"className="searchBar" placeholder="Search"/>
                <svg
                  className="magnifyingGlass"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="white"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
             
            </div>
          </li>
          <li>
            
           
          <div className='relative group'>
        <Link to='/login'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Your Profile" />
        </Link>
        <div className='absolute left-[10px] hidden pt-100 group-hover:block dropdown-menu'>
            <div className='flex flex-col gap-2 px-3 py-3  text-gray-500 rounded w-36 bg-slate-100'>
                <p className='cursor-pointer hover:text-black'>Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
        </div>
        </div>
          </li>
          <li>
          
          <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
    </Link>
          </li>

        </ul>
      </div>
    </div>
  </>
  )
}

export default NavBar

































// <div className='flex items-center justify-between py-5 font-medium'>
// <Link to='/'>
//     <img src={assets.logo} className='w-36' alt="Trendify" />
// </Link>
// <ul className="hidden sm:flex justify-center gap-5 text-sm text-gray-700 w-full">
//     <NavLink to='/' className='flex flex-col items-center gap-1'>
//         <p>HOME</p>
//         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//     </NavLink>
//     <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//         <p>COLLECTION</p>
//         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//     </NavLink>
//     <NavLink to='/about' className='flex flex-col items-center gap-1'>
//         <p>ABOUT</p>
//         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//     </NavLink>
//     <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//         <p>CONTACT</p>
//         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//     </NavLink>
// </ul>
// <div className='flex items-center gap-6'>
//     <img 
//         onClick={() => setShowSearch(true)} 
//         src={assets.search_icon} 
//         className='w-5 cursor-pointer' 
//         alt="Search Products" 
//     />
    // <div className='relative group'>
    //     <Link to='/login'>
    //         <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Your Profile" />
    //     </Link>
    //     <div className='absolute right-100 hidden pt-4 group-hover:block dropdown-menu'>
    //         <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
    //             <p className='cursor-pointer hover:text-black'>Profile</p>
    //             <p className='cursor-pointer hover:text-black'>Orders</p>
    //             <p className='cursor-pointer hover:text-black'>Logout</p>
    //         </div>
    //     </div>
//     </div>
    // <Link to='/cart' className='relative'>
    //     <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
    //     <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
    // </Link>
//     <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu Icon" />
// </div>

// {/* INFO: Sidbar menu for smaller screens */}
// <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//     <div className='flex flex-col text-gray-600'>
//         <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//             <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Dropdown" />
//             <p>Back</p>
//         </div>
//         <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//         <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//         <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//         <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//     </div>
// </div>
// </div>