import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AppContext from "../Context/AppContext/AppContext";
import ProductCartCard from "./ProductCartCard";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import emptyCartImage from "../images/empty-cart.png";
export default 

function Cart(props) {
  let appContext = useContext(AppContext);
  let [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      appContext.cartItems.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0)
    );
  }, [appContext.cartItems]);

  return (
    <div className="roboto">
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              onClick={() => props.setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col justify-between">
                        {/* Replace with your content */}
                        <div>
                          {appContext.cartItems.length < 1 ? (
                            <>
                              <img src={emptyCartImage} className="w-full" />
                              <p className="text-center">
                                No products in the cart
                              </p>
                            </>
                          ) : (
                            appContext.cartItems.map((product) => {
                              return (
                                <>
                                  <ProductCartCard product={product} />
                                </>
                              );
                            })
                          )}
                        </div>

                        <div>
                          {appContext.cartItems.length > 0 ? (
                            <>
                              <h3>Price : {totalAmout}</h3>
                              <Link to="/checkout">
                                <button
                                  onClick={() => {
                                    props.setOpen(false);
                                  }}
                                  className="bg-blue-600 px-3 py-2 shadow-md w-full text-center text-white"
                                >
                                  Proceed To Checkout
                                </button>
                              </Link>
                            </>
                          ) : null}
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}