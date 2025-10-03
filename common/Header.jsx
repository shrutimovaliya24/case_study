"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { SquareChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const navigation = [
  { name: "Home", href: "/#home" },

  { name: "Problem", href: "/#problem" },
  { name: "Solution", href: "/#solution" },
  { name: "Result", href: "/#result" },
  { name: "Contact", href: "/#contact" },
  { name: "Case Studies", href: "/casestudies" },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md w-full fixed z-40">
      
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div className="flex shrink-0 items-center">
                <img alt="Logo" src="/logo/logo.png" className="h-11 w-auto px-5" />
              </div>


              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-blue-950 underline decoration-blue-950 underline-offset-4'
                          : 'text-blue-950 hover:underline hover:decoration-blue-950 hover:underline-offset-4',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>


              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-blue-950 hover:bg-gray-100">
                  {open ? (
                    <SquareChevronRight className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>


          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="sm:hidden fixed top-16 left-0 w-full h-dvh z-[999] bg-white shadow-lg p-6"
              >
                <div className="space-y-3">
                  {navigation.map((item, i) => (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        "text-blue-950 hover:bg-gray-100 block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}
