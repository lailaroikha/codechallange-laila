import Logo from './logo';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products & Services</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Kha Study Help</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Course</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Computing & Information Technologi</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Textbook</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
              </li>
            </ul>
          </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.2c4.2 0 4.7 0 6.4.1 1.6.1 2.5.3 3.1.5.8.3 1.3.7 1.9 1.3.6.6 1 1.1 1.3 1.9.2.6.4 1.5.5 3.1.1 1.6.1 2.2.1 6.4s0 4.7-.1 6.4c-.1 1.6-.3 2.5-.5 3.1-.3.8-.7 1.3-1.3 1.9-.6.6-1.1 1-1.9 1.3-.6.2-1.5.4-3.1.5-1.6.1-2.2.1-6.4.1s-4.7 0-6.4-.1c-1.6-.1-2.5-.3-3.1-.5-.8-.3-1.3-.7-1.9-1.3-.6-.6-1-1.1-1.3-1.9-.2-.6-.4-1.5-.5-3.1-.1-1.6-.1-2.2-.1-6.4s0-4.7.1-6.4c.1-1.6.3-2.5.5-3.1.3-.8.7-1.3 1.3-1.9.6-.6 1.1-1 1.9-1.3.6-.2 1.5-.4 3.1-.5 1.6-.1 2.2-.1 6.4-.1m0-2.2c-4.3 0-4.8 0-6.5.1-1.7.1-2.8.3-3.8.6-.9.4-1.7.9-2.5 1.7-.8.8-1.3 1.6-1.7 2.5-.3.9-.5 2-.6 3.8-.1 1.7-.1 2.2-.1 6.5s0 4.8.1 6.5c.1 1.7.3 2.8.6 3.8.4.9.9 1.7 1.7 2.5.8.8 1.6 1.3 2.5 1.7.9.3 2 .5 3.8.6 1.7.1 2.2.1 6.5.1s4.8 0 6.5-.1c1.7-.1 2.8-.3 3.8-.6.9-.4 1.7-.9 2.5-1.7.8-.8 1.3-1.6 1.7-2.5.3-.9.5-2 .6-3.8.1-1.7.1-2.2.1-6.5s0-4.8-.1-6.5c-.1-1.7-.3-2.8-.6-3.8-.4-.9-.9-1.7-1.7-2.5-.8-.8-1.6-1.3-2.5-1.7-.9-.3-2-.5-3.8-.6-1.7-.1-2.2-.1-6.5-.1zm0 7.6c-4.6 0-8.4 3.7-8.4 8.4s3.7 8.4 8.4 8.4 8.4-3.7 8.4-8.4-3.7-8.4-8.4-8.4zm0 13.9c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm7.8-13.4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; khajourney.com. All rights reserved.</div>

        </div>

      </div>
      </div>
    </footer>
  )
}
