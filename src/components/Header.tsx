import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import cartIcon from '../assets/cart.png';
import {  userType } from "../common/type/types";

function Header() {
  const [userData, setUserData] = useState<userType>();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("loginDetails") as string);
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginDetails");
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between shadow-md px-6 py-4 bg-white">
      <Link to="/dashboard" className="text-2xl font-bold text-gray-900">
        E-commerce
      </Link>

      <div className="flex items-center space-x-4 relative">
        {userData?.userType==='user'&&(
           <Link to="cart">
           <img src={cartIcon} alt="cart" className="w-8" />
         </Link>
        )}
       

        {userData && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200"
            >
              {userData.name}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
