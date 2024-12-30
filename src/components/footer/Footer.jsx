
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

export default function Footer() {
    const context = useContext(myContext);
    const { toggleMode, mode } = context;
    
    return (
        <footer className="text-white body-font" style={{
            backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : 'rgb(0, 123, 255)', 
            color: mode === 'dark' ? 'white' : 'black',
        }}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap order-first text-center md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest title-font" style={{ color: mode === 'dark' ? 'white' : 'black' }}>CATEGORIES</h2>
                        <nav className="mb-10 list-none">
                            <li>
                                <a className="text-white hover:text-blue-500">Home</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blue-500">Order</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blue-500">Local For Vocal</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blue-500">Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Customer Service</h2>
                        <nav className="mb-10 list-none">
                            <li>
                                <Link to={'/returnpolicy'} className="text-white hover:text-blue-500">Return Policy</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className="text-white hover:text-blue-500">About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-white hover:text-blue-500">Contact Us</Link>
                            </li>
                        </nav>
                    </div>

                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest title-font" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Services</h2>
                        <nav className="mb-10 list-none">
                            <li>
                                <Link to={'/privacypolicy'} className="text-white hover:text-blue-500">Privacy</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-blue-500">
                <div className="container flex flex-col items-center px-5 py-3 mx-auto sm:flex-row">
                    <Link to={'/'} className='flex'>
                        <div className="flex">
                            <h1 className='px-2 py-1 text-2xl font-bold text-white rounded'>TROVIX</h1>
                        </div>
                    </Link>
                    <p className="mt-4 text-sm text-white sm:ml-6 sm:mt-0">
                        © 2024 TROVIX — 
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1 text-white" target="_blank">www.trovix.com</a>
                    </p>
                    <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
