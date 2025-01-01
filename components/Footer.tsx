import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
        <div className='max-w-7xl mx-auto'>
      {/* Top Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
        <div className="text-center md:text-left">
          <span className="block text-gray-700 font-semibold">Track Your Order</span>
          <a href="#" className="text-gray-500 text-sm">Click here for quick update</a>
        </div>
        <div className="text-center md:text-left">
          <span className="block text-gray-700 font-semibold">Store Locator</span>
          <a href="#" className="text-gray-500 text-sm">Click here to find your nearby store</a>
        </div>
        <div className="text-center md:text-left">
          <span className="block text-gray-700 font-semibold">Support 24/7</span>
          <Link href="#" className="text-gray-500 text-sm">Contact us 24 hours a day, 7 days a week</Link>
        </div>
        <div className="text-center md:text-left">
          <span className="block text-gray-700 font-semibold">Payment Methods</span>
          <Link href="#" className="text-gray-500 text-sm">COD, Credit Card: Visa, Master Card</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-500 text-sm">Karachi, Sindh Pakistan.</p>
          <p className="text-gray-500 text-sm">moizaman905@gmail.com</p>
          <p className="text-gray-500 text-sm">+92 (0)3132645183</p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Information</h3>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Blogs</li>
            <li>About Us</li>
            <li>Catalogues</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Customer Services</h3>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Store Locator</li>
            <li>Contact Us</li>
            <li>Return & Exchange Policy</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Newsletter Signup</h3>
          <p className="text-gray-500 text-sm mb-4">Subscribe to our newsletter and get latest updates.</p>
          <div className="flex flex-wrap">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 p-2 flex-grow"
            />
            <button className="bg-black text-white w-full px-4 py-2">Subscribe</button>
          </div>




        </div>
      </div>


          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://en-gb.facebook.com/moizahmed.shiakh" target='_blank' className="text-gray-800">
            <FaFacebook size={30}/>
            </Link>
            <Link href="#" className="text-gray-800">
              <FaInstagram size={30}/>
            </Link>
            <Link href="https://www.linkedin.com/in/moiz-ahmed-6516b728a/" target='_blank' className="text-gray-800">
              <FaLinkedin size={30}/>
            </Link>
          </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-300 pt-4">
        Copyright © 2024 Moiz Ahmed. All rights reserved.
      </div>
      </div>
    </footer>
  )
}

export default Footer