import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="text-center rounded-lg">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full py-2 font-bold text-center text-white bg-blue-500 rounded-lg"
                >
                    Buy Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                                    <section className="space-y-4">
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                                            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                                    <form className="space-y-4 md:space-y-6">
                                                        <div>
                                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                                                            <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className="border outline-0 border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-50" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                                                            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" className="border outline-0 border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-50" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                                                            <input value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" name="pincode" id="pincode" className="border outline-0 border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-50" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                                                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="mobileNumber" id="mobileNumber" className="border outline-0 border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-50" required />
                                                        </div>
                                                    </form>

                                                    <button
                                                        onClick={() => { buyNow(); closeModal() }}
                                                        type="button"
                                                        className="focus:outline-none w-full text-white bg-blue-500 hover:bg-blue-600 outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                                                    >
                                                        Order Now
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
