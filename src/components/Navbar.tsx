import { useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { useAuth } from "../context/AuthContext"
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const {signInWithGithub, signOut, user} = useAuth()
    const displayName = user?.user_metadata.user_name || user?.email
    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"} className="font-mono text-xl font-bold text-white">
                        social<span className="text-purple-500">.media</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to={"/"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home 
                        </Link>

                        <Link 
                            to={"/create"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Create Post 
                        </Link>

                        <Link 
                            to={"/communities"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Communities 
                        </Link>

                        <Link 
                            to={"/community/create"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Create Community 
                        </Link>
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                {user.user_metadata.avatar_url && (
                                    <img 
                                    src={user.user_metadata.avatar_url} 
                                    alt="User Avatar" 
                                    className="w-8 h-8 rounded-full object-cover"
                                    />
                                )}
                                <span className="text-gray-300"> {displayName} </span>
                                <button 
                                onClick={signOut}
                                className="bg-red-500 px-3 py-1 rounded"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <button 
                            onClick={signInWithGithub}
                            className="bg-blue-500 px-3 py-1 rounded"
                            >
                                Sign in with Github
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <X className="w-6 h-6"/>
                            ): (
                                <Menu className="w-6 h-6"/>
                            )}
                        </button>
                    </div>
                </div>


                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden bg-[rgba(10,10,10,0.9)]">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link 
                                    to={"/"}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                >
                                    Home 
                                </Link>

                                <Link 
                                    to={"/create"}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                >
                                    Create Post 
                                </Link>

                                <Link 
                                    to={"/communities"}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                >
                                    Communities 
                                </Link>

                                <Link 
                                    to={"/community/create"}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                >
                                    Create Community 
                                </Link>
                            </div>
                        </div>
                    )}
                    
                </div>
            
        </nav>
        
    )
}