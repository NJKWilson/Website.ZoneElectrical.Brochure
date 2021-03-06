/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { 
    name: 'Security', 
    description: "Your customers' data will be safe and secure.", 
   href: '#', icon: ShieldCheckIcon 
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  // { name: 'Watch Demo', href: '#', icon: PlayIcon },
  // { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  // { name: 'About', href: '#', icon: InformationCircleIcon },
  // { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  // { name: 'Press', href: '#', icon: NewspaperIcon },
  // { name: 'Careers', href: '#', icon: BriefcaseIcon },
  // { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  // { name: 'Community', href: '#', icon: UserGroupIcon },
  // { name: 'Partners', href: '#', icon: GlobeAltIcon },
  // { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  // { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopBar() {

  const [scrolling, setScrolling] = useState("bg-opacity-0");
  const [scrolledDown, setScrolledDown] = useState(true);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > 100) {
        // downscroll code
        setScrolling("transition-bg-opacity duration-1000 ease-out bg-opacity-100");
        setScrolledDown(true)
      } else {
        // upscroll code
        setScrolling("transition-bg-opacity duration-1000 ease-out bg-opacity-0");
        setScrolledDown(false)
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledDown]);
  
  return (
    <Popover className={`sticky z-10 top-0 bg-white ${scrolling}`}>
      {({ open }) => (
        <>
          <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
          <div className={`relative z-20 bg-opacity-0`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="\" className="flex">
                  <span className="sr-only">Zone Electrical</span>
                  <img
                    className="h-8 w-auto sm:h-16"
                    src="/images/branding/zone.png"
                    alt="Zone Logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  <Link href="/Accreditations">
                    <a className="text-base font-medium text-zone-600 hover:text-gray-900">Accreditations</a>
                  </Link>
                  <Link href="/casestudies">
                    <a className="text-base font-medium text-zone-600 hover:text-gray-900">Case Studies</a>
                  </Link>
                  <Link href="/contactus">
                    <a className="text-base font-medium text-zone-600 hover:text-gray-900">Contact Us</a>
                  </Link>
                </Popover.Group>
                <div className="flex items-center md:ml-12">
                  <PhoneIcon className="flex-shrink-0 w-6 h-6 text-zone-600" aria-hidden="true" />
                  <span className="ml-3 text-zone-600">(+44) 01685 377484</span>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          {' '}
                          View all products <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Docs
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Company
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Resources
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Blog
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Sales
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
