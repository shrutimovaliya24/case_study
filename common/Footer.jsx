import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 p-6 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="flex flex-col">
            <img alt="Logo" src="/logo/logo.png" className="h-16 w-16 mb-4" />
            <p className="font-extralight text-sm text-gray-300 max-w-xs">
              Businesses gained real-time control, safer deliveries, and cost savings.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-white text-base mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#problem" className="text-gray-300 hover:text-white text-sm transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-gray-300 hover:text-white text-sm transition-colors">Solution</a></li>
              <li><a href="#result" className="text-gray-300 hover:text-white text-sm transition-colors">Result</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#casestudies" className="text-gray-300 hover:text-white text-sm transition-colors">Case Studies</a></li>
         
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-white text-base mb-4">About Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white text-sm transition-colors">Help</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">Forum</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-white text-base mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white text-sm transition-colors">info@fleetguard.com</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">support@fleetguard.com</li>
              <li className="text-gray-300 hover:text-white text-sm transition-colors">+91 9876543210</li>
              <li className="flex gap-3 mt-4">
                <div className="bg-blue-900 hover:bg-blue-800 p-2 rounded-sm text-white transition-colors"><Facebook className="w-5 h-5" /></div>
                <div className="bg-blue-900 hover:bg-blue-800 p-2 rounded-sm text-white transition-colors"><Twitter className="w-5 h-5" /></div>
                <div className="bg-blue-900 hover:bg-blue-800 p-2 rounded-sm text-white transition-colors"><Linkedin className="w-5 h-5" /></div>
                <div className="bg-blue-900 hover:bg-blue-800 p-2 rounded-sm text-white transition-colors"><Instagram className="w-5 h-5" /></div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
