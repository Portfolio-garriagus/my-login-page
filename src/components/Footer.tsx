import Link from "next/link";
import Image from "next/image";
import { TfiFacebook, TfiTwitterAlt, TfiGithub } from "react-icons/tfi";
import React from "react";
import SigninButton from "./SigninButton";

import { GitHubIcon } from "@/components/Icons/github";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-200 py-4 bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800">
            <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
                &copy; 2019-2022
                <a href="https://garriagus.duckdns.org/" className="hover:underline" target="_blank">  garriagus.duckdns.org</a>
                . All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-1">
                <a href="#" data-tooltip-target="tooltip-facebook" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <TfiFacebook />
                    <span className="sr-only">Facebook</span>
                </a>
                <div id="tooltip-facebook" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Like us on Facebook
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a href="#" data-tooltip-target="tooltip-twitter" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <TfiTwitterAlt />
                    <span className="sr-only">Twitter</span>
                </a>
                <div id="tooltip-twitter" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Follow us on Twitter
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a href="#" data-tooltip-target="tooltip-github" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <GitHubIcon />
                    <span className="sr-only">Github</span>
                </a>
                <div id="tooltip-github" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Star us on GitHub
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div id="tooltip-dribbble" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Follow us on
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
