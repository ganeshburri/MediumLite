import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AvatarDropdown({ name }: {name: string}) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            {/* Avatar */}
            <div
                className="rounded-full h-12 w-12 bg-gray-600 flex justify-center items-center mt-1 mr-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                <div className="text-xl text-white font-medium">
                    {name[0]}
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-5 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <a onClick={()=>{
                            localStorage.removeItem("token")
                            navigate("/signin")
                        }} className="block px-4 py-2 text-sm text-red-900 hover:bg-red-100">
                            Logout
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AvatarDropdown;