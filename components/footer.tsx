import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-evergreen-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/evergreen-logo.png"
                alt="EverGreen Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold">CROWNFIELD</span>
            </div>
            <p className="text-gray-300 text-sm">
              Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <Facebook
                size={20}
                className="text-gray-300 hover:text-evergreen-orange cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="text-gray-300 hover:text-evergreen-orange cursor-pointer transition-colors"
              />
              <Instagram
                size={20}
                className="text-gray-300 hover:text-evergreen-orange cursor-pointer transition-colors"
              />
              <Linkedin
                size={20}
                className="text-gray-300 hover:text-evergreen-orange cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-evergreen-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-evergreen-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-evergreen-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-evergreen-orange transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Export & Import</span>
              </li>
              <li>
                <span className="text-gray-300">Equipment Distribution</span>
              </li>
              <li>
                <span className="text-gray-300">Sustainable Farming Support</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-evergreen-orange" />
                <span className="text-gray-300 text-sm">info@evergreen.lk</span>
              </div>
              <div className="flex items-center space-x-2">
      <Phone size={16} className="text-evergreen-orange" />
      <span className="text-gray-300 text-sm">+94 11 209 6221</span>
    </div>

    <div className="flex items-center space-x-2">
      <Phone size={16} className="text-evergreen-orange" />
      <span className="text-gray-300 text-sm">+94 763 855 506</span>
    </div>

    <div className="flex items-center space-x-2">
      <Phone size={16} className="text-evergreen-orange" />
      <span className="text-gray-300 text-sm">+94 776 118 111</span>
    </div>

              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-evergreen-orange" />
                <span className="text-gray-300 text-sm">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2025 CROWNFIELD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
