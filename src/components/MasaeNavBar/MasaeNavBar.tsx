import { FC } from "react";

export const MasaeNavBar: FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <a href="#" className="flex items-center py-4 px-2">
                <img src="logo.png" alt="Logo" className="mr-2 h-8 w-8" />
                <span className="text-lg font-semibold text-gray-500">
                  Navigation
                </span>
              </a>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden items-center space-x-1 md:flex">
              <a
                href=""
                className="border-b-4 border-green-500 py-4 px-2 font-semibold text-green-500 "
              >
                Home
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                Services
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                About
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden items-center space-x-3 md:flex ">
            <a
              href=""
              className="rounded py-2 px-2 font-medium text-gray-500 transition duration-300 hover:bg-green-500 hover:text-white"
            >
              Log In
            </a>
            <a
              href=""
              className="rounded bg-green-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-green-400"
            >
              Sign Up
            </a>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="flex items-center md:hidden">
            <button className="mobile-menu-button outline-none">
              <svg
                className=" h-6 w-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className="mobile-menu hidden">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block bg-green-500 px-2 py-4 text-sm font-semibold text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script> */}
    </nav>
  );
};
