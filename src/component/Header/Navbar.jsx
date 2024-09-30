import { useState, useEffect, useContext } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null); // Tracks which dropdown is open
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu open/close state
    const { user, logOut } = useContext(AuthContext); // AuthContext for user data and logout function

    // Function to handle clicking outside the dropdown or menu to close them
    const handleClickOutside = (event) => {
        if (!menuRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Close menu when clicking outside
            setActiveItem(null); // Close any open dropdowns
        }
    };

    // Handle logout action
    const handleLogout = () => {
        logOut(); // Perform logout action
        toast.success('Logged out successfully'); // Show success toast
        setIsMenuOpen(false); // Close menu after logout
        setActiveItem(null); // Reset active dropdown
    };

    // Add event listener to handle clicks outside of dropdown or menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#eceadd] shadow-md fixed top-0 w-full z-50">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="Synck Logo"
                                className="h-14 w-auto rounded-full"
                            />
                            <span className="md:ml-2 text-sm md:text-xl font-semibold">
                                Saudia Decoration and Wallpaper
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={!isMenuOpen ? "block" : "hidden"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                                <path
                                    className={isMenuOpen ? "block" : "hidden"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setActiveItem(activeItem === 'Dashboard' ? null : 'Dashboard')}
                                    className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                                >
                                    Dashboard <IoMdArrowDropdown className="text-2xl" />
                                </button>
                                {activeItem === 'Dashboard' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                        <Link to={'/order-list'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Order list
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to={'/login'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-lg font-semibold">Menu</span>
                    <button
                        onClick={() => setIsMenuOpen(false)} // Close mobile menu
                        className="text-gray-400 hover:text-gray-500"
                        aria-label="Close menu"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-2 pb-3 space-y-1">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setActiveItem(activeItem === 'Dashboard' ? null : 'Dashboard')}
                                className="flex items-center justify-between w-full text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
                            >
                                Dashboard <IoMdArrowDropdown className="text-2xl" />
                            </button>
                            {activeItem === 'Dashboard' && (
                                <div className="pl-6">
                                    <Link
                                        to={'/order-list'}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsMenuOpen(false)} // Close mobile menu on navigation
                                    >
                                        Order List
                                    </Link>
                                    <button
                                        onClick={handleLogout} // Call the logout handler
                                        className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to={'/login'}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)} // Close mobile menu after login click
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
