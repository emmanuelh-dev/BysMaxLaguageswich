import { useTranslation } from "next-i18next";
import type { FC } from "react";
import Link from "next/link";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";


function getTranslations(lang: string) {
  switch (lang) {
    case "fr":
      return require("/public/locales/fr/header.json");
    case "en":
      return require("/public/locales/en/header.json");
    case "de":
      return require("/public/locales/de/header.json");
    // Agrega más casos según los idiomas que necesites soportar
    default:
      return require("/public/locales/es/header.json");
  }
}
export const Header: FC = ({}) => {
  const { t } = useTranslation(["electronic"]);
  const header = getTranslations(t("electronic:lang"));
  return (
    <header>
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <span className="dark:text-white text-black font-bold text-lg hover:text-blue-600">
                        BysMax
                      </span>
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {header.navigation.map((item: {
                          name: string;
                          href: string;
                        }) => (
                        <Link href={item.href}>
                          <span className="dark:text-white text-black hover:bg-neutral-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-md focus:outline-none hover:bg-neutral-600 hover:text-white  text-sm font-semibold">
                          <span className="px-3 py-2 ">{header.user.name}</span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {header.userNavigation.map((item: {
                          name: string;
                          href: string;
                        }) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={item.href}>
                                  <span
                                    className={classNames(
                                      active ? "bg-neutral-100" : "",
                                      "block px-4 py-2 text-sm text-neutral-600"
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {header.navigation.map((item: {
                          name: string;
                          href: string;
                        }) => (
                    <Link href={item.href}>
                      <ul>
                        <li className="containertext-neutral-300 hover:bg-neutral-600 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                          {item.name}
                        </li>
                      </ul>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-neutral-600 pt-4 pb-3">
                  <div className="flex items-center px-2">
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-black dark:text-white">
                        {header.user.name}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full p-1 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {header.userNavigation.map((item: {
                          name: string;
                          href: string;
                        }) => (
                      <Disclosure.Button
                        key={item.name}
                        className="container text-left block rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-600 hover:text-white"
                      >
                        <ul>
                          <Link href={item.href}>
                            <li className="container">{item.name}</li>
                          </Link>
                        </ul>
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
};
