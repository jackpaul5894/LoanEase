import React from 'react';
import { DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="py-4 md:py-6 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-800 text-white p-1.5 md:p-2 rounded-lg">
              <DollarSign className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-800">LoanEase</h1>
              <p className="text-xs md:text-sm text-gray-600">Simple. Fast. Reliable.</p>
            </div>
          </Link>
          <nav>
            <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors ${
                    location.pathname === '/' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/rates" 
                  className={`transition-colors ${
                    location.pathname === '/rates' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  Rates
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className={`transition-colors ${
                    location.pathname === '/faq' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/apply" 
                  className={`transition-colors ${
                    location.pathname === '/apply' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;