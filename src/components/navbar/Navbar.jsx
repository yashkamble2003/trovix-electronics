import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

import profile from "../../assets/images/circle-modified.png"
function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <Link to={'/allproducts'} className="text-sm font-medium text-blue-600">
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} className="block p-2 -m-2 font-medium text-blue-600">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "yashkamble200319@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="block p-2 -m-2 font-medium text-blue-600">
                      admin
                    </Link>
                  </div> : ""}

                  {user ? <div className="flow-root">
                    <a onClick={logout} className="block p-2 -m-2 font-medium text-blue-600 cursor-pointer">
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'} className="block p-2 -m-2 font-medium text-blue-600 cursor-pointer">
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="block p-2 -m-2 font-medium text-blue-600 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="circle-modified.png"
                        alt="profile" />
                    </Link>
                  </div>
                </div>

                {/* For Mobile View */}
                <div className="flex items-center lg:hidden">
                  <a href="#" className="flex items-center">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt="India Flag"
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span className="block ml-3 text-sm font-medium">INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-blue-600 sm:px-6 lg:px-8">
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="px-4 bg-gray-100 shadow-xl sm:px-6 lg:px-8 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="flex items-center h-16">
            <button
              type="button"
              className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex ml-4 lg:ml-0">
              <Link to={'/'} className='flex'>
                <div className="flex ">
                  <h1 className='px-2 py-1 text-4xl font-bold text-blue-600 rounded'>TROVIX</h1>
                </div>
              </Link>
            </div>

            <div className="flex items-center ml-auto">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to={'/allproducts'} className="text-sm font-medium text-blue-600">
                  All Products
                </Link>
                {user ? <Link to={'/order'} className="text-sm font-medium text-blue-600">
                  Order
                </Link> : <Link to={'/signup'} className="text-sm font-medium text-blue-600">
                  Signup
                </Link>}

                {user?.user?.email === 'yashkamble200319@gmail.com' ?
                  <Link to={'/dashboard'} className="text-sm font-medium text-blue-600">
                    Admin
                  </Link> : ""}

                {user ? <a onClick={logout} className="text-sm font-medium text-blue-600 cursor-pointer">
                  Logout
                </a> : ""}
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-blue-600">
                  <img
                    src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                    alt=""
                    className="flex-shrink-0 block w-5 h-auto"
                  />
                  <span className="block ml-3 text-sm font-medium">INDIA</span>
                </a>
              </div>
              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-blue-600">
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="circle-modified.png"
                    alt="Profile" />
                </a>
              </div>

              <div className="flex lg:ml-6">
                <button className='' onClick={toggleMode}>
                  {mode === 'light' ?
                    (<FiSun className='' size={30} />
                    ) : 'dark' ?
                      (<BsFillCloudSunFill size={30} />
                      ) : ''}
                </button>
              </div>

              {/* Cart */}
              <div className="flow-root ml-4 lg:ml-6">
                <Link to={'/cart'} className="flex items-center p-2 -m-2 group" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <span className="ml-2 text-sm font-medium text-blue-600">{cartItems.length}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
