import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Bot, ChevronDown, Moon, Sun } from "lucide-react";

function Header() {
   const { darkMode, toggleDarkMode } = useTheme();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   }

   return (
      <header className="flex justify-between items-center mb-6 pt-4">
         <div className="relative">
            <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-sm 
            transition-colors duration-200`} onClick={toggleDropdown}>
               <Bot size={20} />
               <span className="text-sm font-medium">GPT-4.5</span>
               <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
               <div className="absolute left-0 mt-2 w-48 shadow-lg rounded-lg overflow-hidden">
                  <button className={`w-full text-left px-4 py-3 ${darkMode ?
                     'bg-gray-800 hover:bg-gray-700 text-white' :
                     'bg-white hover:bg-gray-100'} first:rounded-t-lg last:rounded-b-lg`}>
                     <p className="font-medium">GPT-4.5</p>
                     <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Latest version
                     </p>
                  </button>
               </div>
            )}
         </div>

         {/* Title here */}

         <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-sm transition-colors duration-200`} onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
         </button>
      </header>
   )
}

export default Header;