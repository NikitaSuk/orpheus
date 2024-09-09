import logo from "@/assets/svg/logo1.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to="/events" className="text-white dark:text-dark-main mx-4 text-lg no-underline">Events</Link>
      <Link to="/forum" className="text-white dark:text-dark-main mx-4 text-lg no-underline">Forum</Link>
      <Link to="/marketplace" className="text-white dark:text-dark-main mx-4 text-lg no-underline">Marketplace</Link>
    </>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNavbar = () => {setMenuOpen(!menuOpen)};
  if (window.innerWidth <= 480){
    return(
      <nav className="flex w-full flex-wrap justify-between items-center h-50 p-3 font-sans border-b border-gray-700 dark:bg-dark-background dark:border-dark-secondaryBackground">
        <div className="md:block">
          <Link to="/">
            <img src={logo} className="max-h-8 max-w-8" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center flex-grow">
          <NavLinks/>
        </div>
        <div className="flex text-center">
          <div className="flex md:hidden w-1/2">
            <button onClick={toggleNavbar}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <Link to="/login" className="px-4 py-2 w-24 text-white rounded-full no-underline bg-dark-main text-white hover:bg-dark-secondary hover:text-black transition">
            Login
          </Link>
        </div>
        {menuOpen && (
          <div className="flex basis-full flex-col items-center">
            <NavLinks/>
          </div>
        )
        }
      </nav>
    )
  }
  return (
    <div>
      <nav className="flex w-full justify-between items-center h-16 p-3 font-sans border-b border-gray-700 dark:bg-dark-background dark:border-dark-secondaryBackground">
        {/* home logo */}
        <div className="hidden md:block">
          <Link to="/">
            <img src={logo} className="max-h-8 max-w-8" />
          </Link>
        </div>

        {/* center quicklinks */}
        <div className="md:flex justify-center flex-grow">
          <NavLinks/>
        </div>
        {/* login */}
        <div className="flex text-center">
          <Link to="/login" className="px-4 py-2 w-24 text-white rounded-full no-underline bg-dark-main text-white hover:bg-dark-secondary hover:text-black transition">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
