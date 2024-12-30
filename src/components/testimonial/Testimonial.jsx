import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className="container px-5 py-10 mx-auto">
                    <h1 className='text-3xl font-bold text-center text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className='mb-10 text-2xl font-semibold text-center' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className='text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                                    src="https://randomuser.me/api/portraits/men/5.jpg"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/80'} // Placeholder for broken image
                                />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    "This product has completely transformed my daily workflow. I can't imagine going back to the old way of doing things."
                                </p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-blue-500 rounded" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">John Doe</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                                    src="https://randomuser.me/api/portraits/women/7.jpg"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/80'} // Placeholder for broken image
                                />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    "The customer service was amazing, and the delivery was incredibly fast. I am thrilled with my purchase."
                                </p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-blue-500 rounded" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">Sarah Lee</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Marketing Specialist</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                                    src="https://randomuser.me/api/portraits/men/6.jpg"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/80'} // Placeholder for broken image
                                />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    "A game-changer for our team. The quality and performance exceeded our expectations. Highly recommended!"
                                </p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-blue-500 rounded" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">James Smith</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
